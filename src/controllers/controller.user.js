const UserModel = require('../models/model.user');
const user = new UserModel();
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');
const { generateToken } = require('../helpers/helper.authorization');
const Validation = require('../helpers/helper.validation');

class UserController {
  static async getAll(req, res) {
    try {
      const results = await user.getAll();
      return SuccessResponse.DataFound(req, res, 'Data found', results);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const userId = req.params.userId;
      const result = await user.getById(userId);
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getByEmail(req, res) {
    try {
      const userEmail = req.params.userEmail;
      const result = await user.getByEmail(userEmail);
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async register(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.registerUser(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      const result = await user.register(data);
      return SuccessResponse.Created(req, res, 'Account registered', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async updateData(req, res) {
    try {
      const userId = req.params.userId;
      const data = req.body;
      const { error } = await Validation.registerUser(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      const updateData = { ...data, updatedAt: new Date() };
      const result = await user.update(userId, updateData);
      return SuccessResponse.DataFound(req, res, 'Data updated', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async login(req, res) {
    try {
      const data = req.body;
      const { error } = await Validation.loginUser(data);
      if (error) {
        return ErrorResponse.BadRequest(req, res, error.details[0].message);
      }
      const result = await user.login(data);
      const token = generateToken({ id: result.id });
      result.token = token;
      return SuccessResponse.DataFound(req, res, 'Login success', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = UserController;
