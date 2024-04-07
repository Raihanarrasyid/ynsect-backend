const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/controller.order');

// orderRouter.get('/orders', orderController.getOrders);
// orderRouter.get('/orders/:orderId', orderController.getOrderById);
orderRouter.post('/orders', orderController.createOrder);
// orderRouter.put('/orders/:orderId', orderController.updateOrder);
// orderRouter.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = orderRouter;
