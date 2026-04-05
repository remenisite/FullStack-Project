const express = require("express");
const authMiddleWare = require("../middleware/authMiddleWare");
const { signup, verifyOtp, resentOtp, signin } = require("../controller/authcontroller");

const route = express.Router();

route.post("/signup" , signup)
route.post("/verify" , verifyOtp)
route.post("/resent" , resentOtp)
route.post("/signin" , authMiddleWare, signin)


module.exports = route;
