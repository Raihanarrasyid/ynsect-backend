const express = require('express');
const ForumRouter = express.Router();
const ForumController = require('../controllers/controller.forum');
const { authCheck } = require('../helpers/helper.authorization');

ForumRouter.get('/forums', authCheck, ForumController.getAll);
ForumRouter.post('/forums', authCheck, ForumController.create);
ForumRouter.get('/forums/:forumId', authCheck, ForumController.getById);

module.exports = ForumRouter;
