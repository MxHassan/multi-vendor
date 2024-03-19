const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const verifyActivationToken = (req, res, next) => {
  const { activationToken } = req.body;
  jwt.verify(activationToken, process.env.ACTIVATION_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden, token expierd or not valid' });
    }
    req.user = decoded;
    next();
  });
};
const verifyJWT = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  // console.log(authHeader);
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized no authheader token' });
  }
  const token = authHeader.split(' ')[1];
  // console.log(token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Forbidden. Unauthorized' });
    req.userId = decoded.userInfo.id;
    req.role = decoded.userInfo.role;
    next();
  });
});
module.exports = { verifyActivationToken, verifyJWT };
