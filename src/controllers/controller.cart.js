const CartModel = require('../models/model.cart');
const cart = new CartModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');
const cartHelper = require('../helpers/helper.cart');
const Validation = require('../helpers/helper.validation');

class CartController {
  static async getCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = await cart.getByUserId(userId);
      const cartResponse = await cartHelper(result, userId);
      return responseHelper(res, 200, 'success', cartResponse);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async addOneProductToCart(req, res) {
    try {
      const userId = req.params.userId;
      const productId = req.body.productId;
      const { error } = await Validation.addOneProductToCart(req.body);
      if (error) {
        return HelperError.BadRequest(req, res, error.details[0].message);
      }
      await cart.addOneProductToCart(userId, productId);
      return responseHelper(res, 200, 'success', { message: 'Product added to cart' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async decreaseProductQuantity(req, res) {
    try {
      const userId = req.params.userId;
      const productId = req.body.productId;
      const { error } = await Validation.decreaseProductQuantity(req.body);
      if (error) {
        return HelperError.BadRequest(req, res, error.details[0].message);
      }
      await cart.decreaseProductQuantity(userId, productId);
      return responseHelper(res, 200, 'success', { message: 'Product decreased from cart' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateOrAddProductToCart(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const productId = parseInt(req.body.productId);
      const quantity = parseInt(req.body.quantity);
      const { error } = await Validation.updateOrAddProductToCart(req.body);
      if (error) {
        return HelperError.BadRequest(req, res, error.details[0].message);
      }
      await cart.addProductToCart(userId, { productId, quantity });
      const cartUser = await cart.getByUserId(userId);
      const cartResponse = await cartHelper(cartUser, userId);
      return responseHelper(res, 200, 'success', cartResponse);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async deleteCartByUserId(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      await cart.deleteCartByUserId(userId);
      return responseHelper(res, 200, 'success', { message: 'Cart deleted' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = CartController;
