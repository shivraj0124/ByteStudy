const express = require("express")
const router = express.Router();
const depmodel = require("../Models/Department")
const semmodel = require("../Models/Semster")
const submodel = require("../Models/Subject")
const notesmodel = require("../Models/Notes")


//creating a department

router.post("/create-dep", async (req, res) => {
  try {
    const { name } = req.body;

    const dep = new depmodel({ name: name });
    await dep.save();

    return res.status(200).send({
      success: true,
      message: "Department created successfully",
      dep
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "An error ",
    });
  }
});


//creating a semester 

router.post("/create-sem", async (req, res) => {
  try {
    const { number, depid } = req.body;

    const sem = new semmodel({ number: number, Department: depid });
    await sem.save();

    return res.status(200).send({
      success: true,
      message: "semester created successfully",
      sem
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "An error ",
    });
  }
});


//find semester by departmnet 
router.get("/sem/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const sem = await semmodel.find({ Department: id }).populate("Department", "name");

    return res.status(200).json({ sem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while retrieving semesters" });
  }
});



//craete subject
router.post("/create-subject", async (req, res) => {
  const { name, sem } = req.body
  const subject = new submodel({ name: name, semester: sem });
  await subject.save();
  return res.json({ subject })
})



//get subjects from sem and dep
router.get("/get-sub/:sem", async (req, res) => {
  const { sem } = req.params;
  const subject = await submodel.find({ semester: sem }).populate("semester")
  return res.json({ subject })
});

//create notes
router.post("/create-notes", async (req, res) => {
  const { name, link, subject } = req.body
  const notes = new notesmodel({ name: name, link: link, subject: subject });
  await notes.save();
  return res.json(notes);
});

//get notes by subject
router.get("/get-notes/:sub", async (req, res) => {
  const { sub } = req.params;
  const notes = await notesmodel.find({ subject: sub }).populate("subject");
  return res.json({ notes })
})

module.exports = router