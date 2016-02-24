var Config = require('./config');
var mongoose = require('mongoose');
var Utilities = require('./utilities');

exports.isAdmin = function(req, res, next) {
    if (req.user.role === 1) {
        return next();
    } else {
        return res.status(401).jsonp(Utilities.response(false, {}, 'Access denied', 401));
    }
};

exports.isAuthentication = function(req, res, next) {

};
