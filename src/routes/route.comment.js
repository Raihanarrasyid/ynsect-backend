const express = require('express');
const CommentRouter = express.Router();
const CommentController = require('../controllers/controller.comment');
const { authCheck } = require('../helpers/helper.authorization');

CommentRouter.get('/comments/:forumId', CommentController.getCommentByForumId);
CommentRouter.post('/comments/:forumId', authCheck, CommentController.createComment);
CommentRouter.delete('/comments/:forumId/:commentId', authCheck, CommentController.deleteComment);
CommentRouter.put('/comments/:commentId', authCheck, CommentController.updateComment);

module.exports = CommentRouter;
