const asyncHandler = require('express-async-handler');
const User = require('../model/User');
const { sendToken } = require('../utils/genJWT');
const jwt = require('jsonwebtoken');

// @desc login
// @route POST /auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing Username Or Password' });
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || !user.isActive) return res.status(401).json({ message: 'Unauthorized' });
    const match = await user.validatePassword(password);
    if (!match) return res.status(401).json({ message: 'Invalid Credintials' });
    sendToken(user, 201, res);
  } catch (err) {
    res.status(500).json({ message: `Error: ${err.message}` });
  }
});

// @desc logout
// @route POST /auth/logout
// @access Private
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res
    .clearCookie('jwt', {
      httpOnly: true,
      secure: true,
      sameSite: 'None'
    })
    .json({ message: 'cookie cleared' });
});

// @desc refresh
// @route POST /auth/refresh
// @access Private
const refresh = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.jwt) return res.status(401).json({ message: 'Unauthorized' });
  const refreshToken = cookie.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });
      try {
        const user = await User.findById(decoded.userInfo.id);
        if (!user) return res.status(401).json({ message: 'Unauthorized' });
        const accessToken = user.getJwtAccessToken();
        res.json({ accessToken });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    })
  );
});

module.exports = { login, logout, refresh };
