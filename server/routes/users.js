var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users');
var passport = require('passport');
var AuthController = require('../controllers/auth');
require('../config/passport')(passport);

/* GET */
router.get('/getUserById/:userId',UserController.getUserById);
router.get('/updateAvatar/:avatar',UserController.updateAvatar);



/*POST*/
router.post('/signup',passport.authenticate('signup'),AuthController.signup);
router.post('/login',passport.authenticate('login'),AuthController.login);
router.post('/logout',AuthController.logout);
router.post('/loggedin',AuthController.loggedin);
router.post('/uploadAvatar',UserController.uploadAvatar);
/*DELETE*/
router.delete('/inactive',UserController.inactive);


module.exports = router;
