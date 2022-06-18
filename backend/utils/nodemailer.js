const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "hotmail",
  //   port: 465,
  //   secure: true,
  //   debug: true,
  auth: {
    user: process.env.OUTLOOK_USERNAME,
    pass: process.env.OUTLOOK_PASSWORD,
  },
});

const sendMail = async (email, secretToken, mode) => {
  try {
    if (mode == "OTP") {
      return await transport.sendMail({
        from: process.env.OUTLOOK_USERNAME,
        to: email,
        subject: "OTP Submission",
        html: `
        <h1>Reset Password</h1>
        <p> Here is your otp to change the password ${secretToken} </p>
      `,
      });
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = sendMail;
