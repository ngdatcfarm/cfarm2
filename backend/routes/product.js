const router = require('express').Router();
const productController = require('../controller/productController');
const middlewareController = require('../controller/middlewareController');

// GET all products
router.get('/', productController.getAllProducts);

// CREATE new product
router.post('/', middlewareController.verifyToken, middlewareController.verifyAdmin, productController.createProduct);

// UPDATE product
router.put('/:id', middlewareController.verifyToken, middlewareController.verifyAdmin, productController.updateProduct);

// DELETE product
router.delete('/:id', middlewareController.verifyToken, middlewareController.verifyAdmin, productController.deleteProduct);

module.exports = router;
