'use strict';

var React = require('react');
var ReactDomServer = require('react-dom/server');
var Handlebars = require('handlebars');
var fs = require('fs');
var App = require('../containers/App.js');
var Provider = require('react-redux').Provider;
var store = require('../store/index.js')({ time: 'Day', name: 'User' });

var handlers = {
  initialRender: function initialRender(req, res) {
    var InitialComponent = ReactDomServer.renderToString(React.createElement(
      Provider,
      { store: store },
      React.createElement(App, null)
    ));
    var fileData = fs.readFileSync(__dirname + '/templates/index.html').toString();
    var layoutTemplate = Handlebars.compile(fileData);

    res(layoutTemplate({
      content: InitialComponent
    }));
  }
};

module.exports = handlers;