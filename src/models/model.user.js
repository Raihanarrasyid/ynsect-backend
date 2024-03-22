const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserModel {
  async getAll() {
    return await prisma.user.findMany();
  }

  async getById(userId) {
    return await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });
  }

  async create(data) {
    return await prisma.user.create({
      data: data
    });
  }
}

module.exports = UserModel;
