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
  async create(orderItemData) {
    return await prisma.orderItems.create({
      data: orderItemData
    });
  }
}

module.exports = OrderItemModel;
