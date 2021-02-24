// require rouer from express
const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const {
    validator,
    registerRules,
    loginRules,
  } = require('../middlewares/validator')
  const isAuth = require('../middlewares/isAuth');
  // const authAdmin = require('../middlewares/authAdmin');

//@access Public;
router.post('/register',registerRules(),validator, userCtrl.register);

router.post('/login',loginRules(),validator, userCtrl.login);

//@route GET api/auth/user
//@desc Get authentified user
//@access Private
router.get('/user',isAuth ,userCtrl.getuser);

router.get("/alluser", userCtrl.getalluser);

router.get("/deluser/:_id", userCtrl.deluser);



module.exports = router






