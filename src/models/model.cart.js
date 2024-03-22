const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CartModel {
  async getAll() {
    return await prisma.cart.findMany();
  }

  async getByUserId(userId) {
    return await prisma.cart.findOne({
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

  async update(cartId, data) {
    return await prisma.cart.update({
      where: {
        id: parseInt(cartId)
      },
      data: data
    });
  }

  async getById(cartId) {
    return await prisma.cart.findUnique({
      where: {
        id: parseInt(cartId)
      }
    });
  }

  async create(data) {
    return await prisma.cart.create({
      data: data
    });
  }
}

module.exports = CartModel;
