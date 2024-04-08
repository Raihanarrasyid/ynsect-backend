const AgendaModel = require('../models/model.agenda');
const agenda = new AgendaModel();
const ErrorResponse = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');

class AgendaController {
  static async getAll(req, res) {
    try {
      const result = await agenda.getAll();
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async create(req, res, next) {
    try {
      const { status, title, description } = req.body;

      const image = req.fileUrl;
      const data = { status, title, description, image };
      const result = await agenda.create(data);
      return SuccessResponse.Created(req, res, 'Data created', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const { status, title, description } = req.body;
      const image = req.fileUrl;
      const data = { status, title, description, image };
      await agenda.update(id, data);
      return SuccessResponse.OK(req, res, 'Data updated');
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await agenda.delete(id);
      return SuccessResponse.OK(req, res, 'Data deleted');
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await agenda.getById(id);
      return SuccessResponse.DataFound(req, res, 'Data found', result);
    } catch (error) {
      return ErrorResponse.InternalServer(req, res, error.message);
    }
  }
}

module.exports = AgendaController;
