const CartModel = require('../models/model.cart');
const cart = new CartModel();
const cartHelper = require('../helpers/helper.cart');
const Validation = require('../helpers/helper.validation');
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');

class CartController {
  static async getAllByUserId(req, res) {
    try {
      const userId = req.params.userId;
      const results = await cart.getAllByUserId(userId);
      const cartResponse = await cartHelper(results, userId);
      return SuccessResponse.DataFound(req, res, 'Data found', cartResponse);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async addOneProduct(req, res) {
    try {
      const userId = req.params.userId;
      const data = req.body;
      const { error } = await Validation.addOneProductCart(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      const result = await cart.addOneProduct(userId, data.productId);
      return SuccessResponse.Created(req, res, 'Product added to cart', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async decreaseProductQuantity(req, res) {
    try {
      const userId = req.params.userId;
      const data = req.body;
      const { error } = await Validation.decreaseProductQuantity(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      await cart.decreaseProductQuantity(userId, data.productId);
      return SuccessResponse.OK(req, res, 'Product quantity decreased');
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async updateOrAddProduct(req, res) {
    try {
      const userId = req.params.userId;
      const data = req.body;
      const { error } = await Validation.updateOrAddProductCart(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      await cart.addProduct(userId, data);
      const userCarts = await cart.getAllByUserId(userId);
      const cartResponse = await cartHelper(userCarts, userId);
      return SuccessResponse.Created(req, res, 'Product added to cart', cartResponse);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async deleteAllByUserId(req, res) {
    try {
      const userId = req.params.userId;
      await cart.deleteAllByUserId(userId);
      return SuccessResponse.OK(req, res, 'All products deleted from cart');
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = CartController;
