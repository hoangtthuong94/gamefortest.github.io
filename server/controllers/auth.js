var User = require('../models/users');
var passport = require('passport');
require('../config/passport')(passport);

exports.loggedin= function(req,res){
	res.send(req.isAuthenticated() ? req.user: '0');
};

exports.login = function(req,res){
	res.send(req.user);
};

exports.signup = function(req,res){
	res.send(req.user);
};

exports.logout = function(req,res){
	req.logout();
	req.session.destroy();
	res.send(200);
};
