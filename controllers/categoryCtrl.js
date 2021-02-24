const Category = require('../models/categoryModel')
const Products = require('../models/productModel')

const categoryCtrl = {
    getCategories: async(req, res) =>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createCategory: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name} = req.body;
            const category = await Category.findOne({name})
            if(category) return res.status(400).json({msg: "This category already exists."})

            const newCategory = new Category({name})

            const addedCategory=await newCategory.save()
            res.json({msg: "Created a category",addedCategory})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    deleteCategory: async(req, res) =>{
        try {
            const products = await Products.findOne({category: req.params._id})
            if(products) return res.status(400).json({
                msg: "Please delete all products with a relationship."
            })

           const deletedCategory= await Category.findByIdAndDelete(req.params._id)
           const restCategory= await Category.find()
            res.json({msg: "Deleted a Category",deletedCategory,restCategory})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateCategory: async(req, res) =>{
        try {
            const {name} = req.body;
            const oldCategory= await Category.findOneAndUpdate({_id: req.params._id}, {name})
            const updatedCategory= await Category.findOne({name})

            res.json({msg: "Updated a category",oldCategory,updatedCategory})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = categoryCtrl