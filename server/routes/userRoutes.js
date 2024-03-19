const express = require('express');
const { upload } = require('../multer');
const { createUser, activateUser, getUser, getAllUsers, updateUser, deleteUser } = require('../controller/userController');
const { verifyActivationToken, verifyJWT } = require('../middleware/verifyJWT');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.route('/create-user').post(upload.single('file'), createUser);

router.route('/activation').post(verifyActivationToken, activateUser);

// TODO: auth middleware
router.route('/').get(getAllUsers);
router.use(verifyJWT);
router.route('/user').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
