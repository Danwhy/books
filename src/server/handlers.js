'use strict';
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Handlebars = require('handlebars');
const fs = require('fs');
const App = require('../containers/App.js');
const Provider = require('react-redux').Provider;
const store = require('../store/index.js')({time: 'Day', name: 'User'});


const handlers = {
  initialRender: function(req, res) {
    let InitialComponent = ReactDomServer.renderToString(<Provider store={store}><App /></Provider>);
    let fileData = fs.readFileSync(__dirname + '/templates/index.html').toString();
    let layoutTemplate = Handlebars.compile(fileData);

    res(layoutTemplate({
      content: InitialComponent
    }));
  }
};

module.exports = handlers;
