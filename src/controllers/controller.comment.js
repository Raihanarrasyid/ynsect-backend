const CommentModel = require('../models/model.comment');
const comment = new CommentModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class CommentController {
  static async getCommentByForumId(req, res) {
    try {
      const forumId = parseInt(req.params.forumId);
      const result = await comment.getCommentByForumId(forumId);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createComment(req, res) {
    try {
      const data = req.body;
      const result = await comment.create(data);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async deleteComment(req, res) {
    try {
      const commentId = parseInt(req.params.commentId);
      await comment.deleteComment(commentId);
      return responseHelper(res, 200, 'success', { message: 'Comment deleted' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async updateComment(req, res) {
    try {
      const commentId = parseInt(req.params.commentId);
      const data = req.body;
      await comment.updateComment(commentId, data);
      return responseHelper(res, 200, 'success', { message: 'Comment updated' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = CommentController;
