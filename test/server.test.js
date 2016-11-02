'use strict'

//Imports
var mocha  = require('mocha');
var chai   = require('chai');
var expect = require("chai").expect;
var should = require("chai").should();
var io = require('socket.io-client');

//Setup
var socketURL = 'http://localhost:4404';
var options ={
  transports: ['websocket']
    , forceNew: true
    , reconnection: false
};

describe("Timer Server", function () {
    describe("on server connection", function () {
        var server;
        beforeEach(function (done) {
            //start the server
            server = require('../app/server').server;
            done();
        })

        it("Existing cients recieve a 'joined' notification when new clients join", function (done){
            var client =  io.connect(socketURL, options);
            client.once("connect",function () {
                client.once("joined",function (data) {
                    data.should.be.json;
                    data.id.should.be.a('string');
                    client.disconnect();
                    done();
                });
            });            
            
            var client2 =  io.connect(socketURL, options);
            client2.once("connect",function () {
                client2.disconnect();
            });
        });
    });
});