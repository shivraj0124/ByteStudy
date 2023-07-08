const mongoose = require("mongoose");
const expschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  subject: [
    {
      type: mongoose.Schema.Types.ObjectId, // Corrected typo here
      ref: "Subject",
    },
  ],
});

const exp = mongoose.model("Experiments", expschema);
module.exports = exp;
