const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

class UserModel {
  async getAll() {
    return await prisma.user.findMany({
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
  }

  async getById(userId) {
    return await prisma.user.findUnique({
      where: {
        id: parseInt(userId)
      }
    });
  }

  async getByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email: email
      }
    });
  }

  async create(data) {
    data.password = await bcrypt.hash(data.password, 10);
    return await prisma.user.create({
      data: data
    });
  }

  async login(data) {
    const user = await prisma.user.findFirst({
      where: {
        email: data.email
      }
    });

    if (!user) {
      throw new Error('Akun belum terdaftar');
    }

    const isValid = await bcrypt.compare(data.password, user.password);

    if (!isValid) {
      throw new Error('Email atau password salah');
    }

    return user;
  }
}

module.exports = UserModel;
