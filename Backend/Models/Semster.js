const mongoose=require("mongoose");
const semesterschema  = new mongoose.Schema({
    number:{
        type:Number,
        required:true
    },
    subjects:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"Subject"                  //for refernece❤️❤️
    }]
})

const Semester= mongoose.model("Semester",semesterschema)
module.exports=Semester;