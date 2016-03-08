var express = require('express');
var router = express.Router();
var CommentController = require('../controllers/comments');

/*POST image*/
router.post('/createComment', CommentController.createComment);
router.delete('/deleteComment/:commentId',CommentController.deleteComment);

module.exports = router;
