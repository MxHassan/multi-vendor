const path = require('path')
const { upload } = require('../multer')
const User = require('../model/User')
const ErrorHandler = require('../utils/ErrorHandler')
const { validEmail, validPassword } = require('../utils/validator')

const createUser = async (req, res, next) => {
  const { fullName, email, password, confirmPassword, avatar } = req.body
  if (!fullName || !email || !password || !confirmPassword) return next(new ErrorHandler('All fields are required', 400))
  if (!validEmail(email)) return next(new ErrorHandler('Valid email is required', 400))
  if (!validPassword(password)) return next(new ErrorHandler('Valid password is required', 400))
  if (password !== confirmPassword) return next(new ErrorHandler('Passwords do not match', 400))
  const duplicateEmail = await User.findOne({ email })
  if (duplicateEmail) {
    return next(new ErrorHandler('This email already has been used', 409))
  }
  // const filename = req.file.filename
  // const fileUrl = path.join(filename)
  const user = {
    fullName: fullName,
    email: email,
    password: password
    // avatar: fileUrl
  }
  console.log(user)
}
module.exports = { createUser }
