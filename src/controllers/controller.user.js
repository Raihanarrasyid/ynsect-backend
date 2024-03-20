const UserModel = require('../models/model.user');
const user = new UserModel();

class UserController {
  static async getUsers(req, res) {
    try {
      const results = await user.getAll();
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: results
      });
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
      return res.status(200).json({
        code: 200,
        status: 'success',
        data: results
      });
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
      return res.status(201).json({
        code: 201,
        status: 'success',
        data: results
      });
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
