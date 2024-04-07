const ProductModel = require('../models/model.product');
const product = new ProductModel();
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');

class ProductController {
  static async getAll(req, res) {
    try {
      const results = await product.getAll();
      return SuccessResponse.DataFound(req, res, 'Data found', results);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const productId = req.params.productId;
      const result = await product.getById(productId);
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = ProductController;
