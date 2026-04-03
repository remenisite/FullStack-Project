const express = require("express");
const { signup, verifyOtp, resentOtp, signin } = require("../controller/authController");

const route = express.Router();

route.post("/signup" , signup)
route.post("/verify" , verifyOtp)
route.post("/resent" , resentOtp)
route.post("/signin" , signin)


module.exports = route;
