const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ProductModel {
  async getAll() {
    const products = await prisma.product.findMany();
    return products;
  }

  async getById(productId) {
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId)
      }
    });
    return product;
  }
}

module.exports = ProductModel;
