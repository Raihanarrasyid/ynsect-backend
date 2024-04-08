const express = require('express');
const LikeRouter = express.Router();
const LikeController = require('../controllers/controller.like');
const { authCheck } = require('../helpers/helper.authorization');

LikeRouter.post('/likes', authCheck, LikeController.toggle);
LikeRouter.get('/likes/:forumId', authCheck, LikeController.getAllByForumId);

module.exports = LikeRouter;
