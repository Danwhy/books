'use strict';
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Handlebars = require('handlebars');
const fs = require('fs');
const App = require('../containers/App.js');
const Provider = require('react-redux').Provider;
const store = require('../store/index.js')({time: Date.now()});


const handlers = {
  initialRender: function(req, res) {
    let InitialComponent = ReactDomServer.renderToString(React.createElement(Provider, {store: store}, React.createElement(App, null)));
    let fileData = fs.readFileSync(__dirname + '/templates/index.html').toString();
    let layoutTemplate = Handlebars.compile(fileData);

    res(layoutTemplate({
      content: InitialComponent
    }));
  }
};

module.exports = handlers;
