const { body, validationResult } = require('express-validator');

// Register
const registerRules = () => [
    body('name', 'Name is required').notEmpty(),
    body('lastName', 'Last nameame is required').notEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'Password must contain 6 characters').isLength({
      min: 6,
      max: 20,
    }),
  ];

// login
  const loginRules = () => [
    body('email', 'email is required').isEmail(),
    body('password', 'Password must contain 6 characters').isLength({
      min: 6,
      max: 20,
    }),
  ];

  // loginStore
  const loginStoreRules = () => [
    body('store_Name', 'email is required').notEmpty(),
    body('storePassword', 'Password must contain 6 characters').isLength({
      min: 6,
      max: 20,
    }),
  ];

// errors
  const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        errors: errors.array().map((el) => ({
          msg: el.msg,
        })),
      });
    }
    next();
  };
  
  module.exports = { validator, registerRules, loginRules,loginStoreRules };