const router = require('express').Router()
const storeCtrl = require('../controllers/storeCtrl')
const isAuth = require('../middlewares/isAuth')
const isAuthStore = require('../middlewares/isAuthStore')

const { validator, loginStoreRules } = require('../middlewares/validator')

// const anyauth=(isAuthStore||authAdmin)

router.route('/login').post(loginStoreRules(), validator, storeCtrl.loginStore)

router.route('/store').get(validator, storeCtrl.getStore)

router
  .route('/mystore')
  .get(isAuth, isAuthStore, validator, storeCtrl.getOneStore)

router.route('/add').post(validator, storeCtrl.createStore)

router
  .route('/delete/:_id')
  .delete(validator, isAuth, isAuthStore, storeCtrl.deleteStore)

router
  .route('/edit/:_id')
  .put(validator, isAuth, isAuthStore, storeCtrl.updateStore)

module.exports = router
