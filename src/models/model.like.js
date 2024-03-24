const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class LikeModel {
  static async likeToggle(data) {
    const exist = await prisma.like.findFirst({
      where: {
        userId: data.userId,
        forumId: data.forumId
      }
    });
    if (exist) {
      return await prisma.like.delete({
        where: {
          id: exist.id
        }
      });
    }
    return await prisma.like.create({
      data: {
        userId: data.userId,
        forumId: data.forumId
      }
    });
  }

  static async getLikeByForumId(forumId) {
    return await prisma.like.findMany({
      where: {
        forumId: parseInt(forumId)
      }
    });
  }
}

module.exports = LikeModel;
