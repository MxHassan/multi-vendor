const jwt = require('jsonwebtoken');
require('dotenv').config();

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: process.env.ACTIVATION_TOKEN_EXPIRES });
};
const sendToken = async (user, statusCode, res) => {
  const accessToken = await user.getJwtAccessToken();
  const refreshToken = await user.getJwtRefreshToken();
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    // maxAge: 2 * 60 * 1000 // 2 min
    maxAge: 3 * 24 * 60 * 60 * 1000 // 7day
  };
  res.status(statusCode).cookie('jwt', refreshToken, options).json({
    success: true,
    message: 'User Authenticated successfully',
    // user,
    accessToken
  });
};

module.exports = { sendToken, createActivationToken };
