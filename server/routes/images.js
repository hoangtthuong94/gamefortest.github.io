var express = require('express');
var router = express.Router();
var ImageController = require('../controllers/images');

/*POST image*/
router.post('/uploadThumbnailPost',ImageController.uploadThumbnailPost);
router.post('/uploadImageToPost',ImageController.uploadImageToPost);
router.post('/uploadAvatarImage',ImageController.uploadAvatarImage)
;
module.exports = router;
