const express =require("express")
const router=express.Router();
const usermodel = require("../Models/User")


router.post("/register",async(req,res)=>{
    const {name,email,username,password,cpassword}=req.body
    
})