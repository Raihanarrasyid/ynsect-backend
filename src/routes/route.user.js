const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');
const { authCheck } = require('../helpers/helper.authorization');

UserRouter.get('/users', authCheck, UserController.getAll);
UserRouter.put('/users/:userId', authCheck, UserController.updateData);
UserRouter.get('/users/:userId', authCheck, UserController.getById);
UserRouter.get('/users/:userEmail', authCheck, UserController.getByEmail);
UserRouter.post('/users/register', UserController.register);
UserRouter.post('/users/login', UserController.login);

module.exports = UserRouter;
