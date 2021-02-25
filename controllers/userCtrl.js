// require user from schema
const User = require('../models/User')

// Require bcrypt
const bcrypt = require('bcryptjs')

// Require the json web token
const jwt = require('jsonwebtoken')

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, lastName, email, password } = req.body
      // Simple Validation
      // if (!name || !lastName || !email || !password) {
      //   return res.status(400).json({ msg: 'Please enter all fields!!' })
      // }
      // check existing user
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ msg: 'user already exists' })
      }
      // Create new user
      user = new User({ name, lastName, email, password })

      // Create Salt & hash
      const salt = 10
      const hashedPassword = await bcrypt.hash(password, salt)

      user.password = hashedPassword

      // Save the user
      await user.save()

      // sing user
      const payload = {
        id: user._id,
      }

      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      })

      res.status(200).send({ msg: 'user registred with Sucess', user, token })
    } catch (error) {
      res.status(500).send({ msg: 'Server Error' })
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body
    try {
      //simple Validation
      // if (!email || !password) {
      //   return res.status(400).send({ msg: 'Please enter all fields' })
      // }
      // Check for existing user
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).send({ msg: 'Bad Credentials! email' })
      }
      //Check password
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).send({ msg: 'Bad Credentials! password' })
      }

      // sing user
      const payload = {
        id: user._id,
      }

      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: '7 days',
      })

      res.send({ msg: 'Logged in with success', user, token })
    } catch (error) {
      res.status(500).send({ msg: 'Server Error' })
    }
  },
  //@route GET api/auth/user
  //@desc Get authentified user
  //@access Private

  getuser: async (req, res) => {
    res.status(200).send({ user: req.user })
  },

  getalluser: async (req, res) => {
    try {
      const alluser = await User.find();
      res.status(200).send({ msg: "all user fetched", alluser });
    } catch (error) {
      return res.status(500).json({ msg: err.message });
    }
  },


  deluser: async (req, res) => {
    const { _id } = req.params
    try {
      const deletedUser = await User.findByIdAndDelete({ _id })
      const users = await User.find()
      res.json({ msg: 'user deleted', deletedUser, users })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },


}

module.exports = userCtrl
