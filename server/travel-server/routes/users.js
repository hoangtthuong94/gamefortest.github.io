var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users');

/* GET */
router.get('/getUserById/:userId',UserController.getUserById);

/*POST*/
router.post('/signup',UserController.signup);
router.post('/login',UserController.login);
router.post('/logout',UserController.logout);


module.exports = router;
