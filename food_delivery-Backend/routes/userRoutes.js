const express=require("express")
const crud=require("../controllers/userController")

const router=express.Router()

router.post("/signup",crud.signpost)
router.post("/login",crud.logpostt)

module.exports=router
