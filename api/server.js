const Hapi = require('hapi');
const server= new Hapi.Server();

server.connection({
  port: "8000",
});

server.route(require('./routes.js'));

server.start(function(err){
  if (err) {
    throw new Error(err);
  }
  console.log(server.info.uri);
});
