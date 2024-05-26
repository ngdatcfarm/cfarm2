const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const middlewareController = require('../controller/middlewareController');

router.post('/register', authController.registerUser);
// Đăng nhập
router.post('/login', middlewareController.checkLoggedIn, authController.loginUser);

router.post('/logout', authController.logoutUser); // Thêm route đăng xuất

router.get('/user-details',authToken,userDetailsController,)

module.exports = router;
