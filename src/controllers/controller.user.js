const UserModel = require('../models/model.user');
const user = new UserModel();
const response = require('../helpers/helper.error');
const { generateToken } = require('../helpers/helper.authorization');

class UserController {
  static async getUsers(req, res) {
    try {
      const results = await user.getAll();
      return response.DataFound(req, res, 'Data ditemukan', results);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = await user.getById(userId);
      return response.DataFound(req, res, 'Data ditemukan', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async createUser(req, res) {
    try {
      const data = req.body;
      const result = await user.create(data);
      return response.DataCreated(req, res, 'Akun telah didaftarkan', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async loginUser(req, res) {
    try {
      const data = req.body;
      const result = await user.login(data);
      const token = generateToken({ id: result.id });
      result.token = token;
      return response.DataFound(req, res, 'Berhasil login!', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async loginUser(req, res) {
    try {
      const data = req.body;
      const result = user.getByEmail(data.email);
      if (!result) {
        return response.NotFound(req, res, 'Email tidak ditemukan!');
      }
      const token = generateToken({ id: result.id });
      result.token = token;
      return response.DataFound(req, res, 'Berhasil login!', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = UserController;
