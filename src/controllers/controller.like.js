const LikeModel = require('../models/model.like');
const like = new LikeModel();
const Validation = require('../helpers/helper.validation');
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');

class LikeController {
  static async toggle(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.toggleLike(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      await like.toggle(data);
      return SuccessResponse.OK(req, res, 'Like changed');
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getAllByForumId(req, res) {
    try {
      const forumId = req.params.forumId;
      const results = await like.getAllByForumId(forumId);
      return SuccessResponse.DataFound(req, res, 'Data found', results);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = LikeController;
