require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const createTransporter = async () => {
  try {
    const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'https://developers.google.com/oauthplayground');

    oauth2Client.setCredentials({
      refresh_token: process.env.SMPT_REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
      // oauth2Client.refreshAccessToken
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.log('*ERR: ', err);
          reject();
        }
        resolve(token);
      });
    });

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     type: 'OAuth2',
    //     user: process.env.SMPT_MAIL,
    //     accessToken,
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     refreshToken: process.env.SMPT_REFRESH_TOKEN
    //   }
    // });
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.SMPT_MAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.SMPT_REFRESH_TOKEN,
        accessToken
      }
    });
    return transporter;
  } catch (err) {
    return err;
  }
};
module.exports = createTransporter;
