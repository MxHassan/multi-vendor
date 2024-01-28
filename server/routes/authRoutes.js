const express = require('express')
const { login, logout } = require('../controller/authController')
const loginLimiter = require('../middleware/loginLimiter')
const router = express.Router()

router.route('/login')
  .post(loginLimiter, login)

router.route('/logout')
  .get(logout)
module.exports = router
