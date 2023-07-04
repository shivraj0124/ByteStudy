const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  subject: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }]
});

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;
