const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controllers/controller.product');

ProductRouter.get('/products', ProductController.getAll);
ProductRouter.get('/products/:productId', ProductController.getById);

module.exports = ProductRouter;
