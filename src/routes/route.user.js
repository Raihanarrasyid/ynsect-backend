const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');
const { authCheck } = require('../helpers/helper.authorization');

UserRouter.get('/users', authCheck, UserController.getUsers);
UserRouter.get('/users/:userId', authCheck, UserController.getUserById);
UserRouter.post('/users/signup', UserController.createUser);

module.exports = UserRouter;
