var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config');
var Utilities = require('../config/utilities');


var ImageSchema = new Schema({
    imgName: {
        required: true,
        type: String
    },
    imgLink: {
        required: true,
        type: String
    },
    imgDesciption: {

    },
    size: {
        type: Number
    },
    extension: String,
    createAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'images'
});


//Static functions
ImageSchema.statics = {
    renameFile: function(oldPath, newPath, callback) {

    }
};

//Post-save hook
ImageSchema.post('save', function(doc) {

});

//Post-remove hook
ImageSchema.post('remove', function(doc) {

});

module.exports = mongoose.model('Images', ImageSchema);
