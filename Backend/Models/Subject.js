const mongoose = require("mongoose");
const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  Department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department"
  },
  semester: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester"
  }],
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Notes"
  }],
  experiments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Experiments"
  }],
  questionpaper: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Qp"
  }]
});

const Subjects = mongoose.model("Subject", SubjectSchema);
module.exports = Subjects;
