const LikeModel = require('../models/model.like');
const like = new LikeModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class LikeController {
  static async likeToggle(req, res) {
    try {
      const data = req.body;
      await like.likeToggle(data);
      return responseHelper(res, 200, 'success', { message: 'Like Changed' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getLikeByForumId(req, res) {
    try {
      const forumId = req.params.forumId;
      const result = await like.getLikeByForumId(forumId);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = LikeController;
