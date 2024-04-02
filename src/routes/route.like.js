const express = require('express');
const likeRouter = express.Router();
const likeController = require('../controllers/controller.like');

likeRouter.post('/likes', likeController.likeToggle);
likeRouter.get('/likes/:forumId', likeController.getLikeByForumId);

module.exports = likeRouter;
