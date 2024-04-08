const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ForumModel {
  async getAll() {
    const forums = await prisma.forum.findMany({
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            phone: true,
            address: true,
            createdAt: true,
            updatedAt: true
          }
        }
      }
    });
    return forums;
  }

  async create(data) {
    return await prisma.forum.create({
      data: {
        content: data.question,
        userId: data.userId
      }
    });
  }

  async getById(forumId) {
    const forum = await prisma.forum.findUnique({
      where: {
        id: parseInt(forumId)
      }
    });
    return forum;
  }
}

module.exports = ForumModel;
