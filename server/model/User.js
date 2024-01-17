const { default: mongoose, Schema } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name!']
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!']
    },
    password: {
      type: String,
      required: [true, 'Please enter your password!'],
      minLength: [4, 'Password should be greater than 4 characters'],
      select: false
    },
    phoneNumber: {
      Number
    },
    addresses: [
      {
        country: {
          type: String
        },
        city: {
          type: String
        },
        address1: {
          type: String
        },
        address2: {
          type: String
        },
        zipCode: {
          type: Number
        },
        addressType: {
          type: String
        }
      }
    ],
    role: {
      type: String,
      default: 'user'
    },
    avatar: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
  },
  { timestamps: true }
)
// Hash Password
userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next()
  try {
    const salt = await bcrypt.genSalt(process.env.SALT_WORK_FACTOR)
    this.password = await bcrypt.hash(this.password, salt)
    return next()
  } catch (err) {
    return next(err)
  }
})
// // jwt token
// userSchema.methods.getJwtToken = function () {
//   return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES })
// }
// compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
const User = mongoose.model('User', userSchema)
module.exports = User
