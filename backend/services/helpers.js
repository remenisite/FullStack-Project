const jwt = require("jsonwebtoken");
// const { use } = require("react");

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

const generateAccTkn = (user) => {
  return jwt.sign(
    {
      data: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    },
    process.env.JWT_SEC,
    { expiresIn: "1h" },
  );
};
const generateRefTkn = (user) => {
  return jwt.sign(
    {
      data: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    },
    process.env.JWT_SEC,
    { expiresIn: "15d" },
  );
};
const VerifyTkn = () => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    return decoded;
  } catch (err) {
    return null;
  }
};
module.exports = { generateOTP, generateAccTkn, generateRefTkn, VerifyTkn };
