const React = require('react');
const ReactDomServer = require('react-dom/server');
const InitialPage = React.createFactory(require('../lib/components/initialPage.js'));

const ItemFactory = React.createFactory(InitialPage)

const handlers = {
  initialRender: function(req, res) {
    res(ReactDomServer.renderToString(InitialPage({name: 'Daniel'})));
  }
};

module.exports = handlers;
