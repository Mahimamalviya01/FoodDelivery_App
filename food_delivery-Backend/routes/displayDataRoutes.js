const express=require("express");
const foodData=require("../controllers/dataControllers");
const router=express.Router()

router.post("/foodData",foodData.getAll)

module.exports=router