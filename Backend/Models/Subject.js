
const mongoose=require("mongoose")
const Subjectschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    semester:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"Semester"                  //for refernece❤️❤️
    }],
    notes:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"Notes"
    }],
    experiments:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"Experiments"
    }],
    questionpaper:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"Qp"
    }]
})

const Subjects= mongoose.model("Subject",Subjectschema)
module.exports=Subjects;