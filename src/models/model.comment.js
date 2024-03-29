const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class CommentModel {
  static async create(data) {
    return await prisma.comment.create({
      data: data
    });
  }

  static async getCommentByForumId(forumId) {
    return await prisma.comment.findMany({
      where: {
        forumId: parseInt(forumId)
      }
    });
  }

  static async deleteComment(commentId) {
    return await prisma.comment.delete({
      where: {
        id: parseInt(commentId)
      }
    });
  }

  static async updateComment(commentId, data) {
    return await prisma.comment.update({
      where: {
        id: parseInt(commentId)
      },
      data: data
    });
  }
}

module.exports = CommentModel;
