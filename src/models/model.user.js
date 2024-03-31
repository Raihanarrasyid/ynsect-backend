const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

class UserModel {
  async getAll() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        address: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return users;
  }

  async getById(userId) {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });
    return user;
  }

  async getByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    return user;
  }

  async create(data) {
    data.password = await bcrypt.hash(data.password, 10);
    return await prisma.user.create({
      data: data
    });
  }

  async login(data) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    const isValid = await bcrypt.compare(data.password, user.password);

    if (!user || !isValid) {
      throw new Error('Invalid email or password');
    }

    return user;
  }
}

module.exports = UserModel;
