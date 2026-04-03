const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "smtp.example.com",
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "antorjoy47@gmail.com",
    pass: "crbx zlko xxok cnmg",
  },
});

const sendEmail = async ({ email, subject, otp, template }) => {
  await transporter.sendMail({
    from: ' "E-commarce"', // sender address
    to: email, // list of recipients
    subject: subject, // subject line
    // text: "Hello world?", // plain text body
    html: template({ otp }), // HTML body
  });
};

module.exports = { sendEmail };
