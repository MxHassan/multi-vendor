const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const createTransporter = require('./createTransporter');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const sendMail = async (options) => {
  // const transporter = nodemailer.createTransport({
  //   service: 'Gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: process.env.SMPT_MAIL,
  //     clientId: process.env.CLIENT_ID,
  //     clientSecret: process.env.CLIENT_SECRET,
  //     refreshToken: process.env.SMPT_REFRESH_TOKEN,
  //     accessToken: process.env.SMPT_ACEESS_TOKEN
  //   }
  // });
  try {
    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message
    };
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};
module.exports = sendMail;
