const nodemailer = require('nodemailer');
require('dotenv').config()

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SMPT_MAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.SMPT_REFRESH_TOKEN
    }
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message
  };
  await transporter.sendMail(mailOptions);
};
module.exports = sendMail;
