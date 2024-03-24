const express = require('express');
const ForumRouter = express.Router();
const ForumController = require('../controllers/controller.forum');

ForumRouter.get('/forums', ForumController.getAllForum);
ForumRouter.post('/forums', ForumController.createForum);
ForumRouter.get('/forums/:id', ForumController.getForumById);

module.exports = ForumRouter;
