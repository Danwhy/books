const handlers = require('./handlers.js');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.initialRender,
  },
  {
    method: 'GET',
    path: '/{folder}/{filename}',
    handler: function(req, reply) {
      reply.file(__dirname + '/../public/' + req.params.folder + '/' +req.params.filename);
    }
  }
];

module.exports = routes;
