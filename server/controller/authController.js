const asyncHandler = require('express-async-handler')
const User = require('../model/User')
const { sendToken } = require('../utils/genJWT')
const bcrypt = require('bcrypt')

// @desc login
// @route POST /auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user || !user.isActive) return res.status(403).json({ message: 'Invalid Credintials email' })
  const match = await user.validatePassword(password)
  if (!match) return res.status(401).json({ message: 'Invalid Credintials password' })
  sendToken(user, 201, res)
})
// @desc logout
// @route POST /auth/logout
// @access Private
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies
  if (!cookies?.jwt) return res.sendStatus(204)
  res
    .clearCookie('jwt', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    .json({ message: 'cookie cleared' })
})

module.exports = { login, logout }
