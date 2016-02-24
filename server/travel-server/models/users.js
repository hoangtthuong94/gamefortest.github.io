var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Config = require('../config/config');
var Utilities = require('../config/utilities');

var validateUserName = function(value, callback) {
    return callback(value && (value.length >= 3) &&  (value.length <= 32));
};

var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var validateUniqueEmail = function(value,callback){
    mongoose.model('Users').find({
        'email':value
    },function(err,users){
        return callback(err|| (users.length ===0));
    });
};

var validatePassword = function(value, callback){
    return callback(value &&value.length);
};

var UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: [validateUserName, 'Username must be 3-32 characters']
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match:[emailRegex,'Please enter the valid email'],
        validate:[validateUniqueEmail,'Email address is already in-use']
    },
    hashed_password:{
        type:String,
        required:true,
        validate:[validatePassword,'Password can be blank']
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    gender:{//1: Male 2: Female
        type:Number,
        default:1
    },
    role:{//1:Admin 2:User
        type:Number,
        default:Config.User.Role.User
    },
    createAt:{
    	type:Date,
    	default: Date.now
    }
},{
	collection: 'users'
});

module.exports = mongoose.model('Users',UserSchema);
