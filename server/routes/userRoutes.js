const express = require('express')
const { upload } = require('../multer')
const { createUser, activateUser, getUser, getAllUsers, updateUser, deleteUser } = require('../controller/userController')
const { verifyActivationToken } = require('../middleware/verifyJWT')
const router = express.Router()

router.route('/create-user')
  .post(upload.single('file'), createUser)

router.route('/activation')
  .post(verifyActivationToken, activateUser)

// TODO: auth middleware
router.route('/')
  .get(getAllUsers)

router.route('/:userId')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router
