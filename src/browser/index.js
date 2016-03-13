'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const Greeting = require('../../lib/components/initialPage.js');
const GreetingFactory = React.createFactory(Greeting);
const Provider = require('react-redux').Provider;
const store = createStore(require('../reducers/index.js'));

let renderTarget = document.getElementById('content');

let renderedComponent = ReactDOM.render(
  <Provider store={store}>
    <GreetingFactory name='Daniel'></GreetingFactory>
  </Provider>,
  renderTarget
);
