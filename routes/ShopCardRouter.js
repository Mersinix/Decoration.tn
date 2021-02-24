const router = require('express').Router()
const shopCardCtrl = require('../controllers/shopCardCtrl')
// const isAuth = require('../middlewares/isAuth')
// const authAdmin = require('../middlewares/authAdmin')
const {
    validator,
  } = require('../middlewares/validator')

router.route('/')
    .get(validator,shopCardCtrl.getShops)
    
router.route('/add')
    .post( validator, shopCardCtrl.addShops)

// router.route('/Count')
//     .put( validator, shopCardCtrl.addCountShops)

// router.route('/decCount/:_id')
//     .put( validator, shopCardCtrl.decCountShops)

router.route('/delete/:_id')
    .delete( validator, shopCardCtrl.deleteShops)
    
router.route('/deleteAll')
    .delete( validator, shopCardCtrl.deleteAllShops)



module.exports = router