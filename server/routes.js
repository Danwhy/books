const handlers = require('./handlers.js');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.initialRender,
  }
];

module.exports = routes;
