const jwt = require("jsonwebtoken");
const { use } = require("react");

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

const generateAccTkn = (user) => {
  jwt.sign({
  data: {
    _id: user._id,
    email: user.email,
    role: user.role
  }
}, 'secret', { expiresIn: '1h' });
};

module.exports = { generateOTP, generateAccTkn };
