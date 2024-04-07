const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class OrderItemModel {
  async getByOrderId(orderId) {
    return await prisma.orderItems.findMany({
      where: {
        orderUserId: parseInt(orderId)
      }
    });
  }
  async getByOrderUserId(orderUserId) {
    return await prisma.orderItems.findMany({
      where: {
        orderUserId: parseInt(orderUserId)
      }
    });
  }
  async create(orderItemData) {
    return await prisma.orderItems.create({
      data: orderItemData
    });
  }
}

module.exports = OrderItemModel;
