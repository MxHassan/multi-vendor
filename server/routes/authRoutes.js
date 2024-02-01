const express = require('express');
const { login, logout, refresh } = require('../controller/authController');
const loginLimiter = require('../middleware/loginLimiter');
const router = express.Router();

router.route('/login').post(loginLimiter, login);

router.route('/logout').get(logout);

router.route('/refresh').get(refresh);
module.exports = router;
