const storeRouter = require('express').Router()
const storeCtrl = require('../controllers/storeCtrl')
const isAuth = require('../middlewares/isAuth')
const isAuthStore = require('../middlewares/isAuthStore');


const {
    
    validator,
    loginStoreRules,
  } = require('../middlewares/validator')

// const anyauth=(isAuthStore||authAdmin)

storeRouter.route('/login')
    .post(loginStoreRules(),validator, storeCtrl.loginStore)

storeRouter.route('/store')
    .get(validator,storeCtrl.getStore)

storeRouter.route('/mystore')
    .get(isAuth,isAuthStore,validator,storeCtrl.getOneStore)
    

storeRouter.route('/add')
    .post( validator, storeCtrl.createStore)

storeRouter.route('/delete/:_id')
    .delete( validator, isAuth,isAuthStore,storeCtrl.deleteStore)

storeRouter.route('/edit/:_id')
    .put(validator, isAuth ,isAuthStore, storeCtrl.updateStore)



module.exports = storeRouter