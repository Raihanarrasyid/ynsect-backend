const ForumModel = require('../models/model.forum');
const forum = new ForumModel();
const Validation = require('../helpers/helper.validation');
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');

class ForumController {
  static async getAll(req, res) {
    try {
      const results = await forum.getAll();
      return SuccessResponse.DataFound(req, res, 'Data found', results);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.createForum(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      const result = await forum.create(data);
      return SuccessResponse.Created(req, res, 'Forum created', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const forumId = req.params.forumId;
      const result = await forum.getById(forumId);
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = ForumController;
