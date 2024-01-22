const path = require('path')
const { upload } = require('../multer')
const User = require('../model/User')
const ErrorHandler = require('../utils/ErrorHandler')
const { validEmail, validPassword } = require('../utils/validator')
const asyncHandler = require('express-async-handler')
const { json } = require('body-parser')

const createUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body
  if (!fullName || !email || !password || !confirmPassword || !req?.file)
    return res.status(400).json({ message: 'All fields are required' })
  if (!validEmail(email)) return res.status(400).json({ message: 'Valid email is required' })
  if (!validPassword(password)) return res.status(400).json({ message: 'Valid password is required' })
  if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' })
  const duplicateEmail = await User.findOne({ email })
  if (duplicateEmail) {
    return res.status(409).json({ message: 'This email already has been used' })
  }

  const filename = req.file.filename
  const fileUrl = path.join(filename)
  const user = {
    fullName: fullName,
    email: email,
    password: password,
    avatar: fileUrl
  }
  await User.create(user).then(async (newUser) => {
    res.status(200).json({ message: 'User created successfully', newUser })
  })
})
module.exports = { createUser }
