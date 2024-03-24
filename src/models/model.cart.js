const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CartModel {
  async getByUserId(userId) {
    const cart = await prisma.cart.findMany({
      where: {
        userId: parseInt(userId)
      }
    });
    return cart;
  }

  async updateByUserIdandProductId(userId, productId, quantity) {
    if (quantity === 0) {
      return await prisma.cart.delete({
        where: {
          userId: parseInt(userId),
          productId: parseInt(productId)
        }
      });
    }

    return await prisma.cart.update({
      where: {
        userId: parseInt(userId),
        productId: parseInt(productId)
      },
      data: { quantity: quantity }
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

  async deleteCartByUserId(userId) {
    return await prisma.cart.deleteMany({
      where: {
        userId: parseInt(userId)
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
