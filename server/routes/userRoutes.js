const express = require('express')
const { upload } = require('../multer')
const { createUser } = require('../controller/userController')
const router = express.Router()

router.post('/create-user', upload.single('file'), createUser)

module.exports = router
