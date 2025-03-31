const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    pass:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})

const userModel=mongoose.model("users",userschema)
module.exports=userModel