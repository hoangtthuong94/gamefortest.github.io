var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//load model User
var User = require('../models/users');
var ConfigAuth = require('./auths');

module.exports = function(passport) {
    //create a session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    //distroy a session
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    //Login to system
    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        paswordField: 'passport',
        passReqToCallback: true
    }, function(req, email, password, done) {
        //async
        process.nextTick(function() {
            User.findOne({ 'email': email }, function(err, user) {
                if (err) {
                    return done(err);
                }
                if (!user || !user.validPassword(password)) {
                    return done(null, false);
                } else {
                    return done(null, user);
                }
            });
        });
    }));

    //Signup new member
    passport.use('signup', new LocalStrategy({
            usernameField: 'email',
            paswordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            process.nextTick(function() {
                User.findOne({ 'email': email }, function(err, existingUser) {
                    if (err) {
                        return done(err);
                    }
                    //if user not exit with this email
                    if (existingUser) {
                        return done(null, false);
                    } else {
                        var newUser = new User();
                        newUser.userName = req.body.userName;
                        newUser.email = req.body.email;
                        newUser.password = newUser.generateHash(password);
                        newUser.firstName = req.body.firstName;
                        newUser.lastName = req.body.lastName;
                        newUser.gender = 2;
                        newUser.avatar = './avatars/female.png';
                        newUser.role = 2;

                        newUser.save(function(err, user) {
                            if (err) {
                                return done(null,false);
                            } else {
                                return done(null, user);
                            }
                        });
                    }
                });
            });

        }));
};
