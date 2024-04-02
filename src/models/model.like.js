const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class LikeModel {
  static async likeToggle(data) {
    const exist = await prisma.likeForum.findFirst({
      where: {
        userId: data.userId,
        forumId: data.forumId
      }
    });
    if (exist) {
      return await prisma.likeForum.delete({
        where: {
          id: exist.id
        }
      });
    }
    return await prisma.likeForum.create({
      data: {
        userId: data.userId,
        forumId: data.forumId
      }
    });
  }

  static async getLikeByForumId(forumId) {
    return await prisma.likeForum.findMany({
      where: {
        forumId: parseInt(forumId)
      }
    });
  }
}

module.exports = LikeModel;
