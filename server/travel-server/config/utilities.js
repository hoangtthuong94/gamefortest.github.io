//Utilities
var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');

exports.validateObject = function(id, callback) {
    return callback(checkForHexRegExp.test(id));
};

exports.response = function(success, data, message, statusCode) {
    return {
        'success': success,
        'data': data ? data : {},
        'message': message ? message : 'Successfully',
        'statusCode': statusCode ? statusCode : 200
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
}
