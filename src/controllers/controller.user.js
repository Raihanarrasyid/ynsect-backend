const UserModel = require('../models/model.user');
const user = new UserModel();
const response = require('../helpers/helper.error');
const { generateToken } = require('../helpers/helper.authorization');

class UserController {
  static async getUsers(req, res) {
    try {
      const results = await user.getAll();
      return response.DataFound(req, res, 'Data ditemukan!', results);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const results = await user.getById(userId);
      return response.DataFound(req, res, 'Data ditemukan!', results);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async createUser(req, res) {
    try {
      const data = req.body;
      const results = await user.create(data);
      const token = generateToken({ id: results.insertId });
      results.token = token;
      return response.DataCreated(req, res, 'Berhasil mendaftar!', results);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = UserController;
