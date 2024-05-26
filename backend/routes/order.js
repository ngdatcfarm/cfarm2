const router = require('express').Router();
const orderController = require('../controller/orderController');
const middlewareController = require('../controller/middlewareController');

// Lấy tất cả các đơn hàng hoặc lọc theo điều kiện
router.get('/', middlewareController.verifyToken, middlewareController.verifyAdmin, orderController.getOrders);

// Cập nhật trạng thái done của đơn hàng
router.patch('/update-status/:id', middlewareController.verifyToken, middlewareController.verifyAdmin, orderController.updateOrderStatus);

module.exports = router;
