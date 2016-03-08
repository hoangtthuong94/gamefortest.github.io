var Config = require('../config/utilities');
var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.getUserById = function(req, res) {

};


exports.inactive = function(req, res) {

};

exports.uploadAvatar = function(req, res) {
    Config.uploadAvatar(req, res);
};

exports.updateAvatar = function(req, res) {
    User.findById(req.user._id, function(err, user) {
        if (err) {
            return res.jsonp(err);
        } else {
            user.avatar = "./public/uploads/users/" + req.params.avatar;
            user.save(function(err, user) {
                if (err) {
                    return res.jsonp(err);
                } else {
                    return res.jsonp(user);
                }
            });
        }
    });
};
