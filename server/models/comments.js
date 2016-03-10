var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    postId: {
        type: ObjectId,
        ref: 'Posts'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});

//Export model
module.exports = mongoose.model('Comments', CommentSchema);
