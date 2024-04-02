const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/controller.user');
const { authCheck } = require('../helpers/helper.authorization');

UserRouter.get('/users', authCheck, UserController.getUsers);
UserRouter.get('/user/:userId', authCheck, UserController.getUserById);
UserRouter.post('/user/register', UserController.registerUser);
UserRouter.post('/user/login', UserController.loginUser);

module.exports = UserRouter;
