var Comment = require('../models/comments');

//Create a new comment and save to database
exports.createComment = function(req, res) {
    var newComment = new Comment({
        'content': req.body.content,
        'postId': req.body.postId
    });
    newComment.save(function(err,comment){
    	if (err) {
    		return res.jsonp(err);
    	}else{
    		return res.jsonp(comment);
    	}
    });
};

exports.deleteComment = function(req,res){
    
};
