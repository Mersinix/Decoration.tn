const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const isauth = require('../middlewares/isAuth')
const authAdmin = require('../middlewares/authAdmin')


router.route('/')
    .get(categoryCtrl.getCategories)

router.route('/add')
    .post( authAdmin, categoryCtrl.createCategory)

router.route('/delete/:_id')
    .delete( authAdmin, categoryCtrl.deleteCategory)
    
router.route('/edit/:_id')
    .put( authAdmin, categoryCtrl.updateCategory)


module.exports = router