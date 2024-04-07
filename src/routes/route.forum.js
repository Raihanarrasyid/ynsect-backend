const express = require('express');
const ForumRouter = express.Router();
const ForumController = require('../controllers/controller.forum');
const { authCheck } = require('../helpers/helper.authorization');

ForumRouter.get('/forums', authCheck, ForumController.getAll);
ForumRouter.post('/forum', authCheck, ForumController.create);
ForumRouter.get('/forum/:forumId', authCheck, ForumController.getById);

module.exports = ForumRouter;
