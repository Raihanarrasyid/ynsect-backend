const ProductModel = require('../models/mode.product');
const product = new ProductModel();

class ProductController {
  static async getProducts(req, res) {
    try {
      const results = await product.getAll();
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: results
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: 'error',
        message: error.message
      });
    }
  }

  static async getProductById(req, res) {
    try {
      const productId = parseInt(req.params.productId);
      const results = await product.getById(productId);
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: results
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: 'error',
        message: error.message
      });
    }
  }
}

module.exports = ProductController;
