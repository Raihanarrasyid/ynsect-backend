// const UserModel = require('../models/model.user');
// const user = new UserModel();

const CartModel = require('../models/model.cart');
const cart = new CartModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class CartController {
  static async getCarts(req, res) {
    try {
      const result = await cart.getAll();
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = cart.getByUserId(userId);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const data = req.body;
      const result = cart.updateByUserId(userId, data);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createCart(req, res) {
    try {
      const data = req.body;
      const result = cart.create(data);
      return responseHelper(res, 201, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = CartController;
