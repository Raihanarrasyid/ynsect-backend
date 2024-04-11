const ProductModel = require('../models/model.product');
const product = new ProductModel();

const cartHelper = async (results, userId) => {
  const cartResponse = {
    userId: userId,
    products: [],
    total_items: 0,
    total_price: 0
  };
  for (let i = 0; i < results.length; i++) {
    const productData = await product.getById(results[i].productId);
    cartResponse.products.push({
      id: productData.id,
      name: productData.name,
      quantity: results[i].quantity,
      price: productData.price,
      description: productData.description,
      stock: productData.stock,
      image: productData.image
    });
    cartResponse.total_items += results[i].quantity;
    cartResponse.total_price += results[i].quantity * productData.price;
  }
  return cartResponse;
};

module.exports = cartHelper;
