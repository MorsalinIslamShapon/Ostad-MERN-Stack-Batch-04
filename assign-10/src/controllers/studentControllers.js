const { otpModel } = require("../models/OTPModel");
const studentModel = require("../models/StudentsModel");
const SendEmailUtility = require("../utilities/sendEmailUtility");
const jwt = require("jsonwebtoken");
// register  students
exports.createStudentData = async (req, res) => {
  try {
    const result = await studentModel.create(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({ message: "filed to create student Data" });
    }
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};

exports.StudentLogIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const result = await studentModel.findOne({
      email: email,
      password: password,
    });
    if (result) {
      let token = jwt.sign(
        {
          data: result,
        },
        "pass123",
        { expiresIn: 24 * 60 * 60 }
      );
      res.status(200).json({ message: "login success", data: token });
    } else {
      res.status(500).json({ message: "login failed" });
    }
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};

exports.updateStudentData = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await studentModel.updateOne({ _id: id }, req.body);
    if (result) {
      res.status(200).json({ message: "updated successfully", data: result });
    } else {
      res.status(500).json({ message: "update failed" });
    }
  } catch (err) {
    res.status(500).json({ message: er.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const otp = Math.floor(1000 + Math.random() * 9000);
    let EmailText = "Your Verification Code is =" + otp;
    let EmailSubject = "student password reset verification code";
    let status = 0;
    const user = await studentModel.findOne({ email: email });
    if (user) {
      await SendEmailUtility(email, EmailText, EmailSubject);
      const result = await otpModel.create({
        email: email,
        otp: otp,
        status: status,
      });
      res.status(200).json({ data: "otp sent successfully" });
    } else {
      res.status(500).json({ message: "user not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    let email = req.params.email;
    const otp = req.body.otp 
    
    const searchOtp = await otpModel.findOne({email:email, otp:otp})
    if(searchOtp){
         const result = await studentModel.updateOne({email:searchOtp.email},{password:req.body.password})
         res.status(200).json({data:"password updated successfully" , newData : result})
    }
    else{
        res.status(200).json({data:"otp not matched"})
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}