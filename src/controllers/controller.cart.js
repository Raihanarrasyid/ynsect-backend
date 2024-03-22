// const UserModel = require('../models/model.user');
// const user = new UserModel();

const CartModel = require('../models/model.cart');
const cart = new CartModel();
const HelperError = require('../helpers/helper.error');

class CartController {
  static async getCarts(req, res) {
    try {
      const result = await cart.getAll();
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: result
      });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = cart.getByUserId(userId);
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: result
      });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const data = req.body;
      const result = cart.updateByUserId(userId, data);
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: result
      });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createCart(req, res) {
    try {
      const data = req.body;
      const result = cart.create(data);
      return res.status(201).json({
        code: 201,
        status: 'success',
        data: result
      });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = CartController;
