const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');

UserRouter.get('/users', UserController.getUsers);
UserRouter.get('/users/:userId', UserController.getUserById);
UserRouter.post('/users/signup', UserController.createUser);

module.exports = UserRouter;
