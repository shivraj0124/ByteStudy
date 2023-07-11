const express =require("express")
const router=express.Router();
const usermodel = require("../Models/User")
const bcrypt= require("bcrypt")
const jwt =require("jsonwebtoken")
const JWT_SECRET = "yashaghane"

       
router.post("/register",async(req,res)=>{                                // http://localhost:5000/api/v3/register
    const {name,email,username,password,cpassword}=req.body
      const suser= await usermodel.findOne({email})
      if(suser){
        return res.status(400).send({
            success:false,
            message:"user already exist"
        })
      }
    if(password === cpassword){
    const hashedpass= await bcrypt.hash(password,10)
        const user=new usermodel({name,email,username,password:hashedpass,cpassword:hashedpass});
        await user.save();
        return res.status(200).send({
            success:true,
            message:"done",
            user
        })
    }
    else{
        return res.status(500).send({
            message:"password does not match"
        })
    }
    
});


router.post("/login", async (req, res) => {               // http://localhost:5000/api/v3/login
    try {
        const { password, email } = req.body;
        //validation
        if (!password | ! email) {
            return res.status(401).send({
                success: false,
                message: "Please provide  password",
            });
        }
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(200).send({
                success: false,
                message: "email is not registerd",
            });
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invlid email  or password",
            });
        }
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
            expiresIn: "7d"
        });
        return res.status(200).send({
            success: true,
            messgae: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                username:user.username,
                password: user.password,
                role: user.role
            },
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Login Callcback",
            error,
        });
    }
}
);



router.put("/fpass",async(req,res)=>{
    const {email,newpassword} =req.body
    if(!email || !newpassword){
        return res.status(500).send({
           message:" provide all fields"
        })
    }
    const user= await usermodel.findOne({email});
    if(!user){
        return res.send({message:"user not found "})
    }
    const cpass= await bcrypt.hash(newpassword, 10);
    await usermodel.findByIdAndUpdate(user._id,{password:cpass});
    res.status(200).send({
        message:"password change succesfully ",
        success:true
    })
})
module.exports=router