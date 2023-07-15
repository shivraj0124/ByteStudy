const express = require("express")
const router = express.Router();
const usermodel = require("../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "yashaghane"
const nodemailer = require("nodemailer")
const validator = require("validator");


router.post("/register", async (req, res) => {                                // http://localhost:5000/api/v3/register
    const { name, email, username, password, cpassword } = req.body
    const suser = await usermodel.findOne({ email })
    if (!validator.isEmail(email) || !validator.isLength(email, { min: 3, max: 320 })) {
        return res.status(400).send({
            success: false,
            message: "Invalid email"
        });
    }
    if (!validator.isLength(password, { min: 6 })) {
        return res.status(400).send({
            success: false,
            message: "password shoul be at least 6 digits"
        });
    }

    if (suser) {
        return res.status(400).send({
            success: false,
            message: "user already exist"
        })
    }
    if (password === cpassword) {
        const hashedpass = await bcrypt.hash(password, 10)
        const user = new usermodel({ name, email, username, password: hashedpass, cpassword: hashedpass });
        const userd = await user.save();
        const uu = sendmail(userd.email);
        return res.status(200).send({
            success: true,
            message: "done",
            user: userd,
            uu
        })
    }
    else {
        return res.status(500).send({
            message: "password does not match"
        })
    }

});


router.post("/login", async (req, res) => {               // http://localhost:5000/api/v3/login
    try {
        const { password, email } = req.body;
        //validation
        if (!password | !email) {
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
                username: user.username,
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



router.put("/fpass", async (req, res) => {
    const { email, newpassword } = req.body
    if (!email || !newpassword) {
        return res.status(500).send({
            message: " provide all fields"
        })
    }
    const user = await usermodel.findOne({ email });
    if (!user) {
        return res.send({ message: "user not found " })
    }
    const cpass = await bcrypt.hash(newpassword, 10);
    await usermodel.findByIdAndUpdate(user._id, { password: cpass });
    res.status(200).send({
        message: "password change succesfully ",
        success: true
    })
})





//mail system 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yashaghane21@gmail.com",
        pass: "YASH12345678@"
    }
});

function sendmail(email) {
    const mailoptions = {
        from: "bytedevs2121@gmail.com",
        to: email,
        subject: "Welcome to bytestudy",
        text: "Thank you for registred"
    };
    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            console.error("fsdf")
        } else {
            console.log("email sent ", info.response)
        }
    })
}
module.exports = router