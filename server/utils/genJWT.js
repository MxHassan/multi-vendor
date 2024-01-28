const jwt = require('jsonwebtoken')

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: process.env.ACTIVATION_TOKEN_EXPIRES })
}
const sendToken = async (user, statusCode, res) => {
  const accessToken = await user.getJwtAccessToken()
  const refreshToken = await user.getJwtRefreshToken()
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  }
  res.status(statusCode).cookie('jwt', refreshToken, options).json({
    success: true,
    // user,
    accessToken
  })
}

module.exports = { sendToken, createActivationToken }
