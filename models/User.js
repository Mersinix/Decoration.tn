// require mongoose
const mongoose=require('mongoose')
// require schema from mongoose
const Schema=mongoose.Schema
// Create user schema
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: Number,
        default: 0
    },
});
module.exports=User=mongoose.model('User',userSchema)