const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');
const { authCheck } = require('../helpers/helper.authorization');

UserRouter.get('/users', authCheck, UserController.getAll);
UserRouter.get('/user/:userId', authCheck, UserController.getById);
UserRouter.get('/user/:userEmail', authCheck, UserController.getByEmail);
UserRouter.post('/user/register', UserController.register);
UserRouter.post('/user/login', UserController.login);

module.exports = UserRouter;
