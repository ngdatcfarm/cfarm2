const router = require('express').Router();
const cartController = require('../controller/cartController');
const middlewareController = require('../controller/middlewareController');

// Đặt hàng
router.post('/place-order', middlewareController.verifyToken, middlewareController.verifyUser, cartController.placeOrder);

module.exports = router;
