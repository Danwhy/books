const React = require('react');
const ReactDomServer = require('react-dom/server');
const initialPage = React.createFactory(require('./initialPage.js'));

const handlers = {
  initialRender: function(req, res) {
    res(ReactDomServer.renderToString(initialPage));
  }
};

module.exports = handlers;
