var express = require('express');
var router = express.Router();
var PostController = require('../controllers/posts');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET*/
router.get('/getAllPost',PostController.getAllPost);
router.get('/getPostById/:postId',PostController.getPostById);

/*POST*/
router.post('/createPost',PostController.createPost);

/*PUT*/
router.put('/updatePostById',PostController.updatePostById);

/*DELETE*/
router.delete('/deletePostById/:postId',PostController.deletePostById);

module.exports = router;
