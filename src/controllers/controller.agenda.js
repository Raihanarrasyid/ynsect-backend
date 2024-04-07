const AgendaModel = require('../models/model.agenda');
const agenda = new AgendaModel();
const HelperError = require('../helpers/helper.error');
const responseHelper = require('../helpers/helper.response');

class AgendaController {
  static async getAll(req, res) {
    try {
      const result = await agenda.getAll();
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;
      const result = await agenda.create(data);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await agenda.update(id, data);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await agenda.delete(id);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await agenda.getById(id);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createManyData(req, res) {
    try {
      const data = req.body;
      const result = await agenda.createManyData(data);
      return responseHelper(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = AgendaController;
