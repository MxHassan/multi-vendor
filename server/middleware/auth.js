const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
// const User = require('../model/User');
exports.isAuthenticated = asyncHandler(async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) return res.status(409).json({ message: 'No token found' });
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden token expierd or not valid' });
    try {
      // const user = await User.findById(decoded.userInfo.id).lean();
      req.userId = decoded.userInfo.id;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
});

// module.exports = { isAuthenticated };
