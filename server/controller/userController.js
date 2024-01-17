const express = require('express')
const path = require('path')
const { upload } = require('../multer')
const router = express.Router()

router.post('/create-user', upload.single('file'), (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body
})
