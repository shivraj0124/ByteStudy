const express = require("express")
const router = express.Router();
const depmodel = require("../Models/Department")
const semmodel = require("../Models/Semster")
const submodel = require("../Models/Subject")
const notesmodel = require("../Models/Notes")
const qpmodel =require("../Models/Qp")
const expmodel = require("../Models/Experiment")
const usermodel =require("../Models/User")

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
router.post("/create-Notes", async (req, res) => {
  const { name, link, subject } = req.body
  const notes = new notesmodel({ name: name, link: link, subject: subject });
  await notes.save();
  return res.status(200).json({
    message:"true",
    success:true,
    notes
  })
});

//get notes by subject
router.get("/get-notes/:sub", async (req, res) => {
  const { sub } = req.params;
  const notes = await notesmodel.find({ subject: sub }).populate("subject");
  return res.json({ notes })
})

router.post("/create-QP", async (req, res) => {
  const { name, link, subject } = req.body
  const Qp = new qpmodel({ name: name, link: link, subject: subject });
  await Qp.save();
  return res.status(200).json({
    message:"true",
    success:true,
    Qp
  })
});


router.get("/get-Qp/:sub", async (req, res) => {
  const { sub } = req.params;
  const qp = await qpmodel.find({ subject: sub }).populate("subject");
  return res.json({ qp })
});

router.post("/create-Exp", async (req, res) => {
  const { name, link, subject } = req.body
  const Exp = new expmodel({ name: name, link: link, subject: subject });
  await Exp.save();
  return res.status(200).json({
    message:"true",
    success:true,
    Exp
  })
});

router.get("/get-Exp/:sub", async (req, res) => {
  const { sub } = req.params;
  const Exp = await expmodel.find({ subject: sub }).populate("subject");
  return res.json({Exp })
});




router.get("/cnotes",async(req,res)=>{
  const tnotes=await notesmodel.find({}).count();
  return res.status(200).send({
    tnotes
  })
});

router.get("/cqp",async(req,res)=>{
  const tqp=await qpmodel.find({}).count();
  return res.status(200).send({
    tqp
  })
})


router.get("/cuser",async(req,res)=>{
  const tuser=await usermodel.find({}).count();
  return res.status(200).send({
    tuser
  })
})


router.get("/cexp",async(req,res)=>{
  const texp=await expmodel.find({}).count();
  return res.status(200).send({
    texp
  })
})

module.exports = router