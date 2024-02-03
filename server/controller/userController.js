const path = require('path');
const User = require('../model/User');
const { validEmail, validPassword } = require('../utils/validator');
const asyncHandler = require('express-async-handler');
const { createActivationToken, sendToken } = require('../utils/genJWT');
const sendMail = require('../utils/sendMail');
const deleteImage = require('../utils/deleteImage');

// @desc get a user
// @route GET /users
// @access Private
const getUser = asyncHandler(async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId).lean();
  if (!user) return res.status(400).json({ message: 'No user found with that id' });
  res.status(200).json({ success: true, user });
});
  
// @desc get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().lean();
  if (!users) return res.status(400).json({ message: 'No user found' });
  res.status(200).json({ success: true, users });
});

// @desc create user
// @route POST /users/create-user
// @access Public
const createUser = asyncHandler(async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    if (!firstName || !lastName || !email || !password || !confirmPassword || !req?.file)
      return res.status(400).json({ message: 'All fields are required' });
    const filename = req.file.filename;
    if (!validEmail(email)) {
      deleteImage(filename);
      return res.status(400).json({ message: 'Valid email is required' });
    }
    if (!validPassword(password)) {
      deleteImage(filename);
      return res.status(400).json({ message: 'Valid password is required' });
    }
    if (password !== confirmPassword) {
      deleteImage(filename);
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const duplicateEmail = await User.findOne({ email }).lean().exec();
    if (duplicateEmail) {
      deleteImage(filename);
      return res.status(409).json({ message: 'This email already has been used' });
    }
    const fileUrl = path.join(filename);
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      avatar: fileUrl
    };
    try {
      // creating activation token and sending email to the user
      const activationToken = createActivationToken(user);
      const activationUrl = `${process.env.APP_URL}/activation/${activationToken}`;
      await sendMail({
        email: user.email,
        subject: 'Activate your account',
        message: `Hello ${user.firstName},\nplease click on the link to activate your account: ${activationUrl}`
      }).then(() => {
        res.status(201).json({ success: true, message: `please check your email: ${user.email} to activate your account`, activationUrl });
      });
    } catch (err) {
      return res.status(500).json({ message: `from small trycatch ${err.message}` });
    }
  } catch (err) {
    return res.status(500).json({ message: `from big trycatch ${err.message}` });
  }
});

// @desc activate user
// @route POST /users/activation
// @access Public
const activateUser = asyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const duplicate = await User.findOne({ email: user.email });
    if (duplicate) {
      return res.status(400).json({ message: 'this user already been activated' });
    }
    await User.create(user).then((newUser) => {
      if (!newUser) return res.status(400).json({ message: 'Invalid user data received' });
      res.status(201).json({ message: `User '${newUser.fullName}' activated successfully'` });
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
});

// @desc update user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { createUser, activateUser, getUser, getAllUsers, updateUser, deleteUser };
