const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/controller.order');
const { authCheck } = require('../helpers/helper.authorization');

orderRouter.get('/orders/user/:userId', authCheck, orderController.getOrderByUserId);
orderRouter.get('/orders/:orderId', authCheck, orderController.getById);
orderRouter.post('/orders', authCheck, orderController.createOrder);
orderRouter.put('/orders/status/:orderId', authCheck, orderController.updateStatus);

module.exports = orderRouter;
