const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/controller.order');

orderRouter.get('/orders/user/:userId', orderController.getOrderByUserId);
orderRouter.get('/orders/:orderId', orderController.getById);
orderRouter.post('/orders', orderController.createOrder);
orderRouter.put('/orders/status/:orderId', orderController.updateStatus);

module.exports = orderRouter;
