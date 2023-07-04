const mongoose = require("mongoose");
const departmentschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
    },
  ],
});
const Department = mongoose.model("Department", departmentschema);
module.exports = Department;
