const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CommentModel {
  async create(data) {
    return await prisma.comment.create({
      data: data
    });
  }

  async getCommentByForumId(forumId) {
    return await prisma.comment.findMany({
      where: {
        forumId: parseInt(forumId)
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }

  async deleteComment(commentId) {
    return await prisma.comment.delete({
      where: {
        id: parseInt(commentId)
      }
    });
  }

  async updateComment(commentId, data) {
    return await prisma.comment.update({
      where: {
        id: parseInt(commentId)
      },
      data: data
    });
  }
}

module.exports = CommentModel;
