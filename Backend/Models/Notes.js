const mongoose = require("mongoose")
const notesschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    subject: [{
        type: mongoose.Schema.Types.Objectid,
        ref: "Subject"
    }],

})

const notes = mongoose.model("Notes", notesschema)
module.exports = notes;