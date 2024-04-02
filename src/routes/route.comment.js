const express = require('express');
const CommentRouter = express.Router();
const CommentController = require('../controllers/controller.comment');

CommentRouter.get('/comments/:forumId', CommentController.getCommentByForumId);
CommentRouter.post('/comments/:forumId', CommentController.createComment);
CommentRouter.delete('/comments/:forumId/:commentId', CommentController.deleteComment);
CommentRouter.put('/comments/:commentId', CommentController.updateComment);

module.exports = CommentRouter;
