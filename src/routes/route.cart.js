const express = require('express');
const CartRouter = express.Router();
const CartController = require('../controllers/controller.cart');
const { authCheck } = require('../helpers/helper.authorization');

CartRouter.get('/carts/:userId', authCheck, CartController.getAllByUserId);
CartRouter.post('/carts/:userId', authCheck, CartController.updateOrAddProduct);
CartRouter.delete('/carts/:userId', authCheck, CartController.deleteAllByUserId);
CartRouter.post('/carts/:userId/add', authCheck, CartController.addOneProduct);
CartRouter.post('/carts/:userId/decrease', authCheck, CartController.decreaseProductQuantity);

module.exports = CartRouter;
