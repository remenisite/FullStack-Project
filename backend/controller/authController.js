const userSchema = require("../models/userSchema");
const { sendEmail } = require("../services/emailServices");
const emailTemplate = require("../services/emailTamplate");
const { generateOTP, generateAccTkn } = require("../services/helpers");
const { responseHandler } = require("../utils/responseHandler");
const { isvelidEmail, isvalidPassword } = require("../utils/validation");

const signup = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;
    if (!email) return res.status(400).send({ message: "give email" });
    if (!isvelidEmail(email))
      return res.status(400).send({ message: "give valid email" });
    if (!password) return res.status(400).send({ message: "give password" });
    if (!isvalidPassword(password))
      return res.status(400).send({ message: "give valid password" });
    const exixstingUser = await userSchema.findOne({ email });
    if (exixstingUser)
      responseHandler.error(res, 400, "User in this email already exixst");

    const generateOtp = generateOTP();
    const user = new userSchema({
      fullName,
      email,
      password,
      phone,
      address,
      otp: generateOtp,
      otpExpires: Date.now() + 2 * 60 * 1000,
    });
    sendEmail({
      email,
      subject: "Email",
      otp: generateOtp,
      template: emailTemplate,
    });

    user.save();
    responseHandler.success(res, 201, "Signup ok please verify user email");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (!otp) return responseHandler.error(res, 400, "Otp is required");
    if (!email) return responseHandler.error(res, 400, "Invalid Request");
    const user = await userSchema.findOne({
      email,
      otp: Number(otp),
      otpExpires: { $gt: new Date() },
      isVerified: false,
    });

    if (!user) {
      return responseHandler.error(res, 400, "Invalid or expired OTP");
    }
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    user.save();
    responseHandler.success(res, 200, "Verified Success");
  } catch (error) {
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const resentOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return responseHandler.error(res, 400, "Invalid Request");

    const user = await userSchema.findOne({
      email,
      isVerified: false,
    });
    if (!user) return responseHandler.error(res, 400, "Invalid Request");

    const generateOtp = generateOTP();
          user.otp =  generateOtp,
      user.otpExpires =  Date.now() + 2 * 60 * 1000,
      user.save()
    sendEmail({ email,  subject: "Email", otp: generateOtp, template: emailTemplate, });
    responseHandler.success(res, 200, "otp Sent your Email");
  } catch (error) {
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const signin = async (req,res) =>{
  try {
        const {  email, password } = req.body;
    if (!email) return res.status(400).send({ message: "give email" });
    if (!isvelidEmail(email))
      return res.status(400).send({ message: "give valid email" });
    if (!password) return res.status(400).send({ message: "give password" });
    if (!isvalidPassword(password))
      return res.status(400).send({ message: "give valid password" });
    const exixstingUser = await userSchema.findOne({ email });
    if (!exixstingUser) responseHandler.error(res, 400, "User not found");
    const matchPass = await exixstingUser.comparePassword(password);
    if (!matchPass) return responseHandler.success(res,400,"Invalid Request");

    const AccTkn = generateAccTkn(exixstingUser)



  responseHandler.success(res,200,"Signin Success");    
  } catch (error) {
    console.log(error)

    responseHandler.error(res, 500, "Internal Server Error");
    
  }
}


module.exports = { signup, verifyOtp , resentOtp , signin };
