const OrderModel = require('../models/model.order');
const order = new OrderModel();
const CartModel = require('../models/model.cart');
const cart = new CartModel();
const UserModel = require('../models/model.user');
const user = new UserModel();
const OrderItemModel = require('../models/model.orderitem');
const orderItem = new OrderItemModel();
const cartHelper = require('../helpers/helper.cart');
const responseHelper = require('../helpers/helper.response');
const HelperError = require('../helpers/helper.error');
const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY
});

class OrderController {
  static async createOrder(req, res) {
    try {
      const orderData = req.body;
      const userOrder = await user.getById(orderData.userId);
      const cartUser = await cart.getByUserId(orderData.userId);
      if (cartUser.length === 0) {
        return responseHelper(res, 400, 'error', { message: 'Cart is empty' });
      }
      const cartResponse = await cartHelper(cartUser, orderData.userId);
      const result = await order.create({ ...orderData, totalPrice: cartResponse.total_price });
      const products = cartResponse.products;

      for (let i = 0; i < products.length; i++) {
        await orderItem.create({
          orderUserId: result.id,
          productId: products[i].id,
          quantity: products[i].quantity
        });
      }

      await cart.deleteCartByUserId(orderData.userId);

      const midtransItems = products.map((product) => {
        return {
          id: product.id,
          price: product.price,
          quantity: product.quantity,
          name: product.name,
          brand: 'Ynsect',
          category: 'Insect',
          merchant_name: 'Ynsect'
        };
      });
      const parameter = {
        transaction_details: {
          order_id: result.id,
          gross_amount: result.totalPrice
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          first_name: userOrder.name,
          email: userOrder.email,
          phone: userOrder.phone
        },
        item_details: midtransItems,
        expiry: {
          unit: 'minutes',
          duration: 60
        }
      };
      snap.createTransaction(parameter).then(async (transaction) => {
        await order.update(result.id, { paymentLink: transaction.redirect_url });
        return responseHelper(res, 200, 'success', transaction);
      });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
  static async getOrderByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = await order.getByUserId(userId);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateStatus(req, res) {
    try {
      const orderId = parseInt(req.params.orderId);
      const status = req.body.status;
      const result = await order.updateStatus(orderId, status);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = OrderController;
