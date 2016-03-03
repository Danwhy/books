'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const Greeting = require('../../lib/components/initialPage.js');
const GreetingFactory = React.createFactory(Greeting);

let renderTarget = document.getElementById('content');

let renderedComponent = ReactDOM.render(
  GreetingFactory({name: 'Daniel'}),
  renderTarget
);
