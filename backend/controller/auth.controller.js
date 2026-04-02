const userSchema = require("../models/userSchema");
const { isvelidEmail, isvalidPassword } = require("../services/validation");

const signup = async (req, res) => {
  try {
    const { fullName, email, password, phone, address, otp } = req.body;
    if (!email) return res.status(200).send({ message: "Give email" });
    if (!isvelidEmail(email))
      return res.status(400).send({ message: "give valid email" });
    if (!password) return res.status(200).send({ message: "Give password" });
    if (!isvalidPassword(password))
      return res.status(400).send({ message: "give valid password" });

    const exixstingUser = await userSchema.findOne({ email });
    if (!exixstingUser)
      return res.status(200).send({ message: "User already Exixst" });

    res.send({ message: "signup ok" });
  } catch (error) {
    res.send({ message: "Error" });
  }
};

module.exports = signup;
