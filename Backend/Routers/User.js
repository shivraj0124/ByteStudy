const express =require("express")
const router=express.Router();
const depmodel =require("../Models/Department")
const semmodel =require("../Models/Semster")
const submodel =require("../Models/Subject")
const notesmodel= require("../Models/Notes")


router.get("/all-dep",async(req,res)=>{
    const departments = await depmodel.find({});
    return res.json(departments);
})


module.exports=router