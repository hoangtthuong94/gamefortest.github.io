var express = require('express');
var router = express.Router();
var LikeController = require('../controllers/likes');

/* GET */
router.get('/getLike/:postId',LikeController.getLike);

/*POST*/
router.post('/createLike',LikeController.createLike);
router.post('/unlike',LikeController.unlike);


module.exports = router;
