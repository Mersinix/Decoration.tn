const storeSchema = require('../models/storeModel')
// Require bcrypt
const bcrypt = require('bcrypt')

// Require the json web token
const jwt = require('jsonwebtoken')

const storeCtrl = {
  //Get
  // Path:http://localhost:5000/api/products/
  // affichage des info
  // public

  getStore: async (req, res) => {
    try {
      const stores = await storeSchema.find()
      res.json({ msg: 'Stores getted', stores })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  getOneStore: async (req, res) => {
    
      res.json({ store:req.store })
   
  },
 

  //Post
  // Path:http://localhost:5000/api/stores/add
  // add store in DB from user
  // privé/public

  createStore: async (req, res) => {
    try {
      const {
        store_id,
        store_Name,
        description,
        image,
        category,
        seller,
        storePassword,
        brand,
      } = req.body
      // if (!images) return res.status(400).json({ msg: 'No image upload' })

      const stor = await storeSchema.findOne({ store_id })
      if (stor)
        return res.status(400).json({ msg: 'This store already exists.' })

      const newStore = new storeSchema({
        store_id,
        store_Name: store_Name.toLowerCase(),
        description,
        image,
        category,
        seller,
        storePassword,
        brand,
      })
       // Create Salt & hash
       const salt = 10
       const hashedPassword = await bcrypt.hash(storePassword, salt)
 
       newStore.storePassword = hashedPassword

      const store = await newStore.save()

      // sing store
      const payload = {
        id: store._id,
      }

      const tokenStore = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      })
      res.json({ msg: 'Created a store', store ,tokenStore })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  loginStore: async (req, res) => {
    const { store_Name, storePassword } = req.body
    try {
      //simple Validation
      // if (!email || !password) {
      //   return res.status(400).send({ msg: 'Please enter all fields' })
      // }
      // Check for existing user
      let stor = await storeSchema.findOne({ store_Name })
      if (!stor) {
        return res.status(400).send({ msg: 'Bad Credentials! StoreName' })
      }
      //Check password
      const isMatch = await bcrypt.compare(storePassword, stor.storePassword)
      if (!isMatch) {
        return res.status(400).send({ msg: 'Bad Credentials! password' })
      }

      // sing user
      const payload = {
        id: stor._id,
      }

      const tokenStore = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      })

      res.send({ msg: 'Logged in with success', stor, tokenStore })
    } catch (error) {
      res.status(500).send({ msg: 'Server Error' })
    }
  },
  
  //Delete
  // Path:http://localhost:5000/api/products/delete/:_id
  // delete one products
  // public

  deleteStore: async (req, res) => {
    const { _id } = req.params
    try {
      const deletedStore = await storeSchema.findByIdAndDelete({ _id })
      const stores = await storeSchema.find()
      res.json({ msg: 'Deleted a Store', deletedStore, stores })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  //Edit
  // Path:http://localhost:5000/api/stores/edit/:_id
  // Edit one store
  // public
  updateStore: async (req, res) => {
    try {
      const {
        store_id,
        store_Name,
        description,
        image,
        category,
        seller,
        storePassword,
        brand,
      } = req.body
      //   if (!images) return res.status(400).json({ msg: 'No image upload' })

      const storeUpdated = await storeSchema.findOneAndUpdate(
        { _id: req.params._id },
        {
          store_id,
          store_Name: store_Name.toLowerCase(),
          description,
          image,
          category,
          seller,
          storePassword,
          brand,
        },
      )
      const stores = await storeSchema.find()

      res.json({ msg: 'Updated a Store', storeUpdated, stores })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

}

module.exports = storeCtrl
