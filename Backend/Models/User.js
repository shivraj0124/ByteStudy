const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }, username: {
        type: String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        required:true
    },
    role:{
        type:Number,default:"0"
    }
});

const user = mongoose.model("user", userschema);
module.exports = user;
