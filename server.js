'use strict'
var io = require('socket.io')(process.env.PORT || 3500);

var clientList = [];

io.on('connection', function (socket){
    
    //actions taken when a client joins
    var thisClient = {};
    {
        thisClient.id = "A totaly unique ID"
        clientList.push(thisClient);
        socket.broadcast.emit('joined',{id : thisClient.id});
    }

})