const express = require('express');
const CartRouter = express.Router();
const CartController = require('../controllers/controller.cart');

CartRouter.get('/carts', CartController.getCarts);
CartRouter.get('/carts/:userId', CartController.getCartByUserId);
CartRouter.put('/carts/:userId', CartController.updateCartByUserId);
CartRouter.post('/carts', CartController.createCart);
