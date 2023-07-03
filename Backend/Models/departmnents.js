const mongoose=require(mongoose)
const departmentschema  = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    semesters:[{
        type:mongoose.Schema.Types.Objectid,
        ref:"semester"                  //for refernece❤️❤️
    }]
})

const Department= mongoose.model("Department",departmentschema)
module.exports=Department;