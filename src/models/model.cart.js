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
    const result = await prisma.cart.findFirst({
      where: {
        userId: parseInt(userId),
        productId: parseInt(data.productId)
      }
    });

    if (result) {
      const quantity = result.quantity + parseInt(data.quantity);
      return await this.updateByUserIdandProductId(userId, data.productId, quantity);
    }

    return await prisma.cart.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(data.productId),
        quantity: parseInt(data.quantity)
      }
    });
  }

  async addOneProductToCart(userId, productId) {
    const result = await prisma.cart.findFirst({
      where: {
        userId: parseInt(userId),
        productId: parseInt(productId)
      }
    });

    if (result) {
      const quantity = result.quantity + 1;
      return await this.updateByUserIdandProductId(userId, productId, quantity);
    }

    return await prisma.cart.create({
      data: {
        userId: parseInt(userId),
        productId: parseInt(productId),
        quantity: 1
      }
    });
  }

  async deceaseProductQuantity(userId, productId) {
    const result = await prisma.cart.findFirst({
      where: {
        userId: parseInt(userId),
        productId: parseInt(productId)
      }
    });

    if (result) {
      const quantity = result.quantity - 1;
      return await this.updateByUserIdandProductId(userId, productId, quantity);
    }

    return null;
  }

  async deleteCartByUserId(userId) {
    return await prisma.cart.deleteMany({
      where: {
        userId: parseInt(userId)
      }
    });
  }
}

module.exports = CartModel;
