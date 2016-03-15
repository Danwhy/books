'use strict';

var handlers = require('./handlers.js');

var routes = [{
  method: 'GET',
  path: '/',
  handler: handlers.initialRender
}, {
  method: 'GET',
  path: '/{folder}/{filename}',
  handler: function handler(req, reply) {
    reply.file(__dirname + '/../../public/' + req.params.folder + '/' + req.params.filename);
  }
}];

module.exports = routes;