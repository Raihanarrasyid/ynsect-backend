const AgendaModel = require('../models/model.agenda');
const agenda = new AgendaModel();
const HelperError = require('../helpers/helper.error');
const SuccessResponse = require('../helpers/helper.success');
const uploadMiddleware = require('../middleware/middleware.uploadFile');

class AgendaController {
  static async getAll(req, res) {
    try {
      const result = await agenda.getAll();
      return SuccessResponse.DataFound(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async create(req, res) {
    try {
      const data = req.body;

      await uploadMiddleware(req, res, async (error) => {
        if (error) {
          return HelperError.BadRequest(req, res, error.message);
        }

        if (!req.body.image) {
          return HelperError.BadRequest(req, res, 'Image is required.');
        }

        const result = await agenda.create(data);
        return SuccessResponse.Created(res, 200, 'success', result);
      });

      const result = await agenda.create(data);
      return SuccessResponse.Created(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await agenda.update(id, data);
      return SuccessResponse.Created(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await agenda.delete(id);
      return SuccessResponse.Created(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await agenda.getById(id);
      return SuccessResponse.DataFound(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }

  static async createManyData(req, res) {
    try {
      const data = req.body;
      const result = await agenda.createManyData(data);
      return SuccessResponse.Created(res, 200, 'success', result);
    } catch (error) {
      return HelperError.InternalServerError(req, res, error.message);
    }
  }
}

module.exports = AgendaController;
