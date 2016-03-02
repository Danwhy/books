'use strict';
const React = require('react');
const ReactDomServer = require('react-dom/server');
const Handlebars = require('handlebars');
const fs = require('fs');
const InitialPage = React.createFactory(require('../lib/components/initialPage.js'));

const ItemFactory = React.createFactory(InitialPage)

const handlers = {
  initialRender: function(req, res) {
    let InitialComponent = ReactDomServer.renderToString(InitialPage({name: 'Daniel'}));
    let fileData = fs.readFileSync(__dirname + '/templates/index.html').toString();
    let layoutTemplate = Handlebars.compile(fileData);

    res(layoutTemplate({
      content: InitialComponent
    }));
  }
};

module.exports = handlers;
