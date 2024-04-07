const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CartModel {
  async getAllByUserId(userId) {
    const carts = await prisma.cart.findMany({
      where: {
        userId: parseInt(userId)
      }
    });
    return carts;
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

  async addProduct(userId, data) {
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

  async addOneProduct(userId, productId) {
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

  async decreaseProductQuantity(userId, productId) {
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

  async deleteAllByUserId(userId) {
    return await prisma.cart.deleteMany({
      where: {
        userId: parseInt(userId)
      }
    });
  }
}

module.exports = CartModel;
