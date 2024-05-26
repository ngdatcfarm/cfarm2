const userController = require('../controller/userController');
const middlewareController = require('../controller/middlewareController');
const router = require('express').Router();

// Route để lấy tất cả người dùng, chỉ truy cập được khi có mã thông báo hợp lệ
router.get('/users', middlewareController.verifyToken, middlewareController.verifyAdmin, userController.getAllUsers);

// Route để xóa người dùng, chỉ truy cập được khi có mã thông báo hợp lệ và quyền admin
router.delete('/user/:id', middlewareController.verifyToken, middlewareController.verifyAdmin, userController.deleteUser);

module.exports = router;
