const { default: mongoose, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_WORK_FACTOR = 10;
require('dotenv').config();

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      get: capitalizeFirstLetter,
      required: [true, 'Please enter your first name!']
    },
    lastName: {
      type: String,
      get: capitalizeFirstLetter,
      required: [true, 'Please enter your last name!']
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
      type: Number
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
      type: String,
      required: true
    },
    // avatar: {
    //   public_id: {
    //     type: String,
    //     required: true
    //   },
    //   url: {
    //     type: String,
    //     required: true
    //   }
    // },
    isActive: {
      type: Boolean,
      default: true
    },
    resetPasswordToken: String,
    resetPasswordTime: Date
  },
  { timestamps: true }
);
// virtual full name and capitalization
UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});
function capitalizeFirstLetter(v) {
  return v.charAt(0).toUpperCase() + v.substring(1);
}
// Hash Password
UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});
// jwt access token
UserSchema.methods.getJwtAccessToken = function () {
  const payload = {
    userInfo: {
      id: this._id,
      role: this.role
    }
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES
  });
};
// jwt refresh token
UserSchema.methods.getJwtRefreshToken = function () {
  const payload = {
    userInfo: {
      id: this._id,
      role: this.role
    }
  };
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES
  });
};
// compare passwords
UserSchema.methods.validatePassword = async function validatePassword(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
