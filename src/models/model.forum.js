const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ForumModel {
  async getAllForum() {
    return await prisma.forum.findMany();
  }

  async createForum(data) {
    return await prisma.forum.create({
      data: {
        content: data.question,
        userId: data.userId
      }
    });
  }

  async getForumById(id) {
    return await prisma.forum.findUnique({
      where: {
        id: parseInt(id)
      }
    });
  }
}

module.exports = ForumModel;
