var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var config = require('./config/config');
var passport = require('passport');
var flash = require('connect-flash');
var fs = require('fs');
var lusca = require('lusca');
var busboy         = require('connect-busboy');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

var app = express();

//Connect database with mongoDB
console.log('target-', config.Env[process.env.NODE_ENV].Database);
console.log('env-', process.env.NODE_ENV);
mongoose.connect(config.Env[process.env.NODE_ENV].Database);


//var app = express();

//SET MONGOLAB_URI="mongodb://heroku_82lbgc0c:son231994@ds053312.mongolab.com:53312/heroku_821bgc0c
//Connect to database
//mongoose.connect("mongodb://nvs2394:son231994@ds017248.mlab.com:17248/heroku_82lbgc0c");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
    secret: '@son231994@trang1041996',
    resave: true,
    saveUninitialized: true
}));
app.use(lusca({
    csrf: false,
    csp: { /* ... */ },
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xssProtection: false
}));

//include passport to login,signup,logout
require('./config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

// CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, CONNECT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Max-Age', '86400'); // 24 hours

    // Intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(busboy());

// Bootstrap models
fs.readdirSync('./models').forEach(function(file) {
    if (~file.indexOf('.js')) {
        require('./models/' + file);
    }
});

var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');

app.use('/', routes);
app.use('/users', users);
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    return res.status(404).json({
        'statusCode': 404,
        'success': false,
        'message': 'Route not found',
        'data': {}
    });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
