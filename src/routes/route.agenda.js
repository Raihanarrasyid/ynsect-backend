const express = require('express');
const AgendaRouter = express.Router();
const AgendaController = require('../controllers/controller.agenda');
const uploadMiddleware = require('../middleware/middleware.uploadFile');

AgendaRouter.get('/agendas', AgendaController.getAll);
AgendaRouter.post('/agendas', uploadMiddleware, AgendaController.create);
AgendaRouter.put('/agendas/:id', AgendaController.update);
AgendaRouter.delete('/agendas/:id', AgendaController.delete);
AgendaRouter.get('/agendas/:id', AgendaController.getById);
AgendaRouter.post('/agendas/many', AgendaController.createManyData);

module.exports = AgendaRouter;
