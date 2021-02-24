const Products = require('../models/productModel')


const productCtrl = {
  //Get
  // Path:http://localhost:5000/api/products/
  // affichage des info
  // public
  
  getProducts: async (req, res) => {
    try {
      const products = await Products.find()
      res.json({ msg: 'Product getted', products })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },


  getMyProducts: async (req, res) => {
    try {
      // const {
      //   stor,
      // } = req.body

      const products = await Products.find()
      res.json({ msg: 'Your Product getted', products })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
//Post
// Path:http://localhost:5000/api/products/add
// add product in DB from user
// privé/public

  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        store,
        images,
        category,
      } = req.body
      // if (!images) return res.status(400).json({ msg: 'No image upload' })

      const prod = await Products.findOne({product_id})
      if (prod)
        return res.status(400).json({ msg: 'This product already exists.' })

      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        store,
        images,
        category,
      })

      const product = await newProduct.save()
      res.json({ msg: 'Created a product', product })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //Delete
  // Path:http://localhost:5000/api/products/delete/:_id
  // delete one products
  // public

  deleteProduct: async (req, res) => {
    const {_id} = req.params
    try {
      const deletedProduct = await Products.findByIdAndDelete({_id})
      const products = await Products.find()
      res.json({ msg: 'Deleted a Product', deletedProduct, products })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //Edit
  // Path:http://localhost:5000/api/products/edit/:_id
  // Edit one products
  // public
  updateProduct: async(req, res) =>{
    try {
        const {title, price, description, store, images, category} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})

        const productUpdated = await Products.findOneAndUpdate({_id: req.params._id}, {
            title: title.toLowerCase(), price, description, store, images, category
        })
        const products = await Products.find()

        res.json({msg: "Updated a Product",productUpdated, products })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

  // updateProduct: async (req, res) => {
  //   const {product_id} = req.params
  //   const updated = { $set: req.body }
  //   try {
  //     // if (!images) return res.status(400).json({ msg: 'No image upload' })

  //     const productUpdated = await Products.findOneAndUpdate(
  //       {product_id},
  //       { ...updated },
  //     )
  //     const products = await Products.find()

  //     res.json({ msg: 'Updated a Product', productUpdated, products })
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message })
  //   }
  // },
}

module.exports = productCtrl
