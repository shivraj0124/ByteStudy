const express =require("express")
const router=express.Router();
const depmodel =require("../Models/Department")

router.post("/create-dep", async (req, res) => {
    try {
      const { name } = req.body;
  
      const sem = new depmodel({ name:name });
      await sem.save();
  
      return res.status(200).send({
        success: true,
        message: "Department created successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        success: false,
        message: "An error ",
      });
    }
  });
  




module.exports=router