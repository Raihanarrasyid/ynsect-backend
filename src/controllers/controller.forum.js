const ForumModel = require('../models/model.forum');
const forum = new ForumModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class ForumController {
  static async getAllForum(req, res) {
    try {
      const result = await forum.getAllForum();
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createForum(req, res) {
    try {
      const data = req.body;
      await forum.createForum(data);
      return responseHelper(res, 200, 'success', { message: 'Forum created' });
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getForumById(req, res) {
    try {
      const id = req.params.id;
      const result = await forum.getForumById(id);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}
