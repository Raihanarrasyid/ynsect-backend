// const UserModel = require('../models/model.user');
// const user = new UserModel();

const CartModel = require('../models/model.cart');
const cart = new CartModel();
const HelperError = require('../helpers/helper.error');
const response = require('../helpers/helper.response');

class CartController {
  static async getCarts(req, res) {
    try {
      const result = await cart.getAll();
      return response(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = cart.getByUserId(userId);
      return response(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const data = req.body;
      const result = cart.updateByUserId(userId, data);
      return response(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createCart(req, res) {
    try {
      const data = req.body;
      const result = cart.create(data);
      return response(res, 201, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = CartController;
