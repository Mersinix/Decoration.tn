// require Json web token
const jwt = require('jsonwebtoken');

// Require the store Schema
const storeSchema = require('../models/storeModel');

const isAuthStore = async (req, res, next) => {
  try {
    const tokenStore = req.headers['x-auth-token-Store'];
    // Check for tokenStore
    if (!tokenStore)
      return res.status(401).send({ msg: 'No Token, authorization denied' });

    const decoded = await jwt.verify(tokenStore, process.env.secretOrKey);

    // Add Store from payload
    const stor = await storeSchema.findById(decoded.id);
    //Check for store
    if (!stor) {
      return res.status(401).send({ msg: 'authorization denied' });
    }
    // Create user
    req.stor = stor;
    next();
  } catch (error) {
    return res.status(400).json({ msg: 'Token is not valid' });
  }
};

module.exports = isAuthStore;
