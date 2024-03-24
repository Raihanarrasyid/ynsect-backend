const express = require('express');
const CartRouter = express.Router();
const CartController = require('../controllers/controller.cart');

CartRouter.get('/carts/:userId', CartController.getCartByUserId);
CartRouter.post('/carts/:userId', CartController.updateOrAddProductToCart);
CartRouter.delete('/carts/:userId', CartController.deleteCartByUserId);
CartRouter.post('/carts/:userId/add', CartController.addOneProductToCart);
CartRouter.post('/carts/:userId/decrease', CartController.decreaseProductQuantity);

module.exports = CartRouter;
