const UserModel = require('../models/model.user');
const user = new UserModel();
const responseHelper = require('../helpers/helper.response');

class UserController {
  static async getUsers(req, res) {
    try {
      const results = await user.getAll();
      return responseHelper(res, 200, 'success', results);
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: 'error',
        message: error.message
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const results = await user.getById(userId);
      return responseHelper(res, 200, 'success', results);
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: 'error',
        message: error.message
      });
    }
  }

  static async createUser(req, res) {
    try {
      const data = req.body;
      const results = await user.create(data);
      return responseHelper(res, 201, 'success', results);
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: 'error',
        message: error.message
      });
    }
  }
}

module.exports = UserController;
