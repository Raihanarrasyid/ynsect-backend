const express = require('express');
const likeRouter = express.Router();
const likeController = require('../controllers/controller.like');

likeRouter.post('/like', likeController.likeToggle);
likeRouter.get('/like/:forumId', likeController.getLikeByForumId);

module.exports = likeRouter;
