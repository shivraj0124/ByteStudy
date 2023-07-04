


const mongoose = require("mongoose");

const semesterschema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    Department:{type:mongoose.Schema.Types.ObjectId,
        ref:"Department"},
  
});

const Semester = mongoose.model("Semester", semesterschema);
module.exports = Semester;
