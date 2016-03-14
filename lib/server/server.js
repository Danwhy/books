const Hapi = require('hapi');
const Path = require('path');
const fs = require('fs');

const server = new Hapi.Server();

server.connection({
  port: "8000",
});

server.route(require('./routes.js'));

server.register(require('inert'), (err) => {
    if (err) {
        console.error('Failed to load plugin:', err);
    }
});

server.start(function(err){
  if (err) {
    throw new Error(err);
  }
  console.log(server.info.uri);
});
