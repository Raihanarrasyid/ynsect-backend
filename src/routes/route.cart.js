import express from 'express';
const CartRouter = express.Router();
import CartController from '../controllers/controller.cart.js'

CartRouter.get('/carts', CartController.getCarts);
CartRouter.get('/carts/:userId', CartController.getCartByUserId);
CartRouter.put('/carts/:userId', CartController.updateCartByUserId);
CartRouter.post('/carts', CartController.createCart);