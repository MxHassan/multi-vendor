const jwt = require('jsonwebtoken')

const verifyActivationToken = (req, res, next) => {
  const { activationToken } = req.body
  jwt.verify(activationToken, process.env.ACTIVATION_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden, token expierd or not valid' })
    }
    req.user = decoded
    next()
  })
}
module.exports = { verifyActivationToken }
