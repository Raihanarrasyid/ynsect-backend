const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class OrderModel {
  async getAll() {
    return await prisma.orderUser.findMany();
  }

  async getById(orderId) {
    return await prisma.orderUser.findUnique({
      where: {
        id: parseInt(orderId)
      }
    });
  }
  async getByUserId(userId) {
    return await prisma.orderUser.findMany({
      where: {
        userId: parseInt(userId)
      }
    });
  }
  async create(orderData) {
    return await prisma.orderUser.create({
      data: orderData
    });
  }
  async update(orderId, orderData) {
    return await prisma.orderUser.update({
      where: {
        id: parseInt(orderId)
      },
      data: orderData
    });
  }
  async delete(orderId) {
    return await prisma.orderUser.delete({
      where: {
        id: parseInt(orderId)
      }
    });
  }

  async updateStatus(orderId, status) {
    return await prisma.orderUser.update({
      where: {
        id: parseInt(orderId)
      },
      data: {
        status: status
      }
    });
  }
}

module.exports = OrderModel;
