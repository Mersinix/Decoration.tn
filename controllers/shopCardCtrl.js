// const Products = require('../models/productModel')
const shopCardModel = require('../models/shopCardModel')

const shopCardCtrl = {
  //Get
  // Path:http://localhost:5000/api/ShopCard/
  // affichage des info
  // public

  getShops: async (req, res) => {
    try {
      const shops = await shopCardModel.find()
      res.json({ msg: 'Shops getted', shops })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //Post
  // Path:http://localhost:5000/api/ShopCard/add
  // add product in DB from user
  // privé/public

  addShops: async (req, res) => {
    try {
        const {product_id,title,price,description,images} = req.body;
     
      // if (!images) return res.status(400).json({ msg: 'No image upload' })


      const prodCard = await shopCardModel.findOne({product_id})

      if (prodCard)
        return res.status(400).json({ msg: 'This product already exists.' })

      const newProdCard = new shopCardModel({
        product_id,title:title.toLowerCase(),price,description,images
      })

      const shops = await newProdCard.save()

      res.json({ msg: 'product added to shop', shops })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },




//Post
  // Path:http://localhost:5000/api/ShopCard/add
  // add product in DB from user
  // privé/public

// addCountShops: async (req, res) => {
//     try {
        
//         const {prod}=rep.body;
     
//       // if (!images) return res.status(400).json({ msg: 'No image upload' })
      
//       const incCount = await shopCardModel.findOneAndUpdate({_id:req.params._id},{count})
//       const acount = await shopCardModel.findOne({count})
//     //   if (!count)
//     //     return res.status(400).json({ msg: 'There is no products here.' })
        
     
//       res.json({ msg: 'product count updated', acount,incCount })
//     } catch (err) {
//       return res.status(500).json({ msg: err.message })
//     }
//   },

  addCountShops: async (req, res) =>{
    try {
        const prodcard = await shopCardModel.findById(req.prodcard.id)
        if(!prodcard) return res.status(400).json({msg: "User does not exist."})

        await shopCardModel.findOneAndUpdate({_id: req.prodcard.id}, {
            count: req.body.count
        })

        return res.json({msg: "Added to cart"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
},

  // Delete
  // Path:http://localhost:5000/api/ShopCard/delete/:_id
  // delete one products
  // public

  deleteShops: async (req, res) => {
    const { _id } = req.params
    try {
      const deletedProduct = await shopCardModel.findByIdAndDelete({ _id })
      const products = await shopCardModel.find()
      res.json({ msg: 'Deleted a Product', deletedProduct, products })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },


//Delete
  // Path:http://localhost:5000/api/ShopCard/delete/:_id
  // delete one products
  // public

  deleteAllShops: async (req, res) => {
    
    try {
      
      const products = await shopCardModel.remove({})
      res.json({ msg: 'Deleted a Product', products })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
}

module.exports = shopCardCtrl
