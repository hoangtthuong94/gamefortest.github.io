var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var validateTitle = function(value, callback) {
    return callback(value && (value.length > 10));
};


var validateContent = function(value, callback) {
    return callback(value && (value.length > 10));
}

var PostSchema = new Schema({
    thubnail: {
        type: String
    },
    title: {
        type: String,
        required: true,
        validate: [validateTitle, 'Title is require , at least than 10 characters'],
        index: true
    },
    description: {
        type: String
    },
    content: {
        type: String,
        required: true,
        validate: [validateContent, 'Content is require , at least than 10 characters']
    },
    userId: {
        type: ObjectId,
        ref:'Users'
    },
    priceTicket: {
        type: Number,
        default: 0
    },
    timeBegin:{
         type: Date,
        default: Date.now
    },
    timeEnd:{
         type: Date,
        default: Date.now
    },
    statistic: {
        likes: {
            type: Number,
            default: 0
        },
        comments: {
            type: String,
            default: 0
        }
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'posts'
});

PostSchema.statics.findComments = function(id, callback) {
    return this.model('Comments').find({ postId: id }, callback);
};

module.exports = mongoose.model('Posts', PostSchema);
