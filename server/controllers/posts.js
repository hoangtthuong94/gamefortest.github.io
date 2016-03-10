var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Utilities = require('../config/utilities');

//Get all Post in Database
exports.getAllPost = function(req, res) {
    Post.find({}).populate('userId').sort({ createAt: -1 }).exec(function(err, posts) {
        if (err) {
            return res.jsonp(Utilities.response(false, err));
        } else {
            return res.jsonp(Utilities.response(true, posts));
        }
    });
};


//Get post by Id of Post
exports.getPostById = function(req, res) {
    Post.findById(req.params.postId).populate('userId').exec(function(err, post) {
        if (err) {
            return res.jsonp(Utilities.response(false, err));
        } else {
            return res.jsonp(Utilities.response(true, post));
        }
    });
};

exports.createPost = function(req, res) {
    var newPost = Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        userId: req.user._id,
        postBy: req.body.postBy
    });

    newPost.save(function(err, post) {
        if (err) {
            return res.jsonp(err);
        } else {
            return res.jsonp(post);
        }
    })
};

exports.updatePostById = function(req, res) {
    Post.findById(req.body._id, function(err, data) {
        data.title = req.body.title;
        data.description = req.body.description;
        data.content = req.body.content;
        data.save(function(err, post) {
            if (err) {
                return res.jsonp(err);
            } else {
                return res.jsonp(post);
            }
        });
    });
};

exports.deletePostById = function(req, res) {
    Post.remove({ _id: req.params.postId }, function(err, post) {
        if (err) {
            return res.jsonp(err);
        } else {
            return res.jsonp(post);
        }
    });
};

exports.setPinPost = function(req, res) {

};
