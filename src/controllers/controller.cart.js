const CartModel = require('../models/model.cart');
const cart = new CartModel();
const ProductModel = require('../models/model.product');
const product = new ProductModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class CartController {
  static async getAll(req, res) {
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
      const result = await cart.getByUserId(userId);
      const cartResponse = {
        userId: userId,
        products: [],
        total_items: 0,
        total_price: 0
      };
      for (let i = 0; i < result.length; i++) {
        const productData = await product.getById(result[i].productId);
        cartResponse.products.push({
          id: result[i].product_id,
          name: productData.name,
          quantity: result[i].quantity,
          price: productData.price,
          description: productData.description
        });
        cartResponse.total_items += result[i].quantity;
        cartResponse.total_price += result[i].quantity * productData.price;
      }
      return responseHelper(res, 200, 'success', cartResponse);
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
