# Timer - Service

When playing a game or other activity that requires synchronized countdown timers this service will allow clients multiple clients to connect and receive the same countdown.

## How do I get set up?

* Download the code from git@github.com:mkoelle/timer-service.git
* navigate to ./nodeserver
  * npm
    * `npm install `
    * `npm install --global mocha typings`
  * typings:
    * `typings install dt~node --global --save`
    * `typings install dt~express dt~serve-static dt~express-serve-static-core --global --save`
    * `typings install dt~socket.io dt~socket.io-client --global --save`