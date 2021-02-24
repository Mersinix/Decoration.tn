const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')
// const isAuth = require('../middlewares/isAuth')
// const authAdmin = require('../middlewares/authAdmin')
const {
    validator,
  } = require('../middlewares/validator')

router.route('/')
    .get(validator,productCtrl.getProducts)

router.route('/myprod')
    .get(validator,productCtrl.getMyProducts)
    

router.route('/add')
    .post( validator, productCtrl.createProduct)

router.route('/delete/:_id')
    .delete( validator, productCtrl.deleteProduct)

router.route('/edit/:_id')
    .put(validator,  productCtrl.updateProduct)



module.exports = router