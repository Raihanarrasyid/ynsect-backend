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
      },
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
    return user;
  }

  async getByEmail(userEmail) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail
      },
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
    return user;
  }

  async register(data) {
    data.password = await bcrypt.hash(data.password, 10);
    return await prisma.user.create({
      data: data
    });
  }

  async update(userId, data) {
    return await prisma.user.update({
      where: {
        id: parseInt(userId)
      },
      data: data
    });
  }

  async login(data) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new Error('Invalid email or password');
    }

    return user;
  }
}

module.exports = UserModel;
