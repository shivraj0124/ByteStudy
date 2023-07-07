const mongoose = require("mongoose");
const Qpschema = new mongoose.Schema({
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
    }
  ],
});

const Qp = mongoose.model("Qp", Qpschema);
module.exports = Qp;
