const mongoose = require('mongoose')


const storeSchema = new mongoose.Schema({
    store_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    store_Name:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    image:{
        type: String,
        trim: true,
        required: true
    },
    products:{
        type: Array,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    seller:{
        type: String,
        required: true
    },
    storePassword:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
   
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Store", storeSchema)