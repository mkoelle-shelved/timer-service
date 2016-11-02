'use strict'
var config = require('./config.json');
var appname = 'timerservice';
var io = require('socket.io')(process.env.PORT || config.server.port);
var bunyan = require('bunyan');
var log = bunyan.createLogger(config.logging);

var clientList = [];
log.info('server started, listening on port:'+ config.server.port);
log.info(io)

io.on('connection', function (socket){
    
    //actions taken when a client joins
    var thisClient = {};
    {
        thisClient.id = "A totaly unique ID"
        clientList.push(thisClient);
        socket.broadcast.emit('joined',{id : thisClient.id});
        log.info('client connected');
    }

})