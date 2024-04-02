const UserModel = require('../models/model.user');
const user = new UserModel();
const response = require('../helpers/helper.error');
const { generateToken } = require('../helpers/helper.authorization');
const Validation = require('../helpers/helper.validation');

class UserController {
  static async getUsers(req, res) {
    try {
      const results = await user.getAll();
      return response.DataFound(req, res, 'Data found', results);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = parseInt(req.params.userId);
      const result = await user.getById(userId);
      return response.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async registerUser(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.registerUser(data);
      if (error) {
        return response.BadRequest(req, res, error.details[0].message);
      }
      const result = await user.register(data);
      return response.Created(req, res, 'Account registered', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }

  static async loginUser(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.loginUser(data);
      if (error) {
        return response.BadRequest(req, res, error.details[0].message);
      }
      const result = await user.login(data);
      const token = generateToken({ id: result.id });
      result.token = token;
      return response.DataFound(req, res, 'Login success', result);
    } catch (error) {
      return response.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = UserController;
