const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CartModel {
  async getAll() {
    return await prisma.cart.findMany();
  }

  async getByUserId(userId) {
    return await prisma.cart.findMany({
      where: {
        userId: parseInt(userId)
      }
    });
  }

  async updateByUserId(userId, data) {
    return await prisma.cart.update({
      where: {
        userId: parseInt(userId)
      },
      data: data
    });
  }

  async addProductToCart(userId, data) {
    return await prisma.cart.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(data.productId),
        quantity: parseInt(data.quantity)
      }
    });
  }

  async deleteProductFromCart(userId, productId) {
    return await prisma.cart.delete({
      where: {
        userId: parseInt(userId),
        productId: parseInt(productId)
      }
    });
  }
}

module.exports = CartModel;
