//Utilities to server
var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
var fs = require('fs');
var randtoken = require('rand-token');


exports.validateObject = function(id, callback) {
    return callback(checkForHexRegExp.test(id));
};

exports.response = function(success, data, message, statusCode) {
    return {
        'success': success,
        'statusCode': statusCode ? statusCode : 200,
        'message': message ? message : 'Successfully',
        'data': data ? data : {}
    };
};

exports.getErrorMessage = function(req, err) {
    var errText = '';
    if (!err) {
        errText = 'Server error';
    } else if (err.errors) {
        errText = err.errors[Object.keys(err.errors)[0]] ? err.errors[Object.keys(err.errors)[0]].message : 'Server error';
    } else {
        errText = err.message;
    }
    return errText;
};

exports.uploadAvatar = function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function(fieldname, file, filename) {
        console.log('Uploading : ' + filename);
        var extension = filename.replace(/^.*\./, '');
        console.log(extension);
        var random = randtoken.generate(20);
        fstream = fs.createWriteStream('public/uploads/users/avatar-' + random + '.' + extension);
        file.pipe(fstream);
        fstream.on('close', function(err) {
            if (err) {
                return res.jsonp(err);
            } else {
                return res.jsonp('avatar-' + random + '.' + extension);
            }
        });
    });
};

exports.uploadsImagePost = function(req, res) {
    
}
