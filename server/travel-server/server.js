// #!/usr/bin/env node
var debug = require('debug')('app');
var app = require('./app');

var net = require('net');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'),app.get('ipaddr'), function() {
    // var socketIO = require('./socketio')(server);
    // debug('Express server listening on port ' + server.address().port);
    console.log('Express server listening on  IP: ' + app.get('ipaddr') + ' and port ' + app.get('port'));
});
