const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controllers/controller.product');
const { authCheck } = require('../helpers/helper.authorization');

ProductRouter.get('/products', authCheck, ProductController.getAll);
ProductRouter.get('/product/:productId', authCheck, ProductController.getById);

module.exports = ProductRouter;
