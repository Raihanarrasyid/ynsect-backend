const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class LikeModel {
  async toggle(data) {
    const exist = await prisma.like.findFirst({
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

  async getAllByForumId(forumId) {
    const likes = await prisma.like.findMany({
      where: {
        forumId: parseInt(forumId)
      }
    });
    return likes;
  }
}

module.exports = LikeModel;
