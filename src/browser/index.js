const React = require('react');
const ReactDOM = require('react-dom');
const Greeting = require('../../lib/components/initialPage.js');
const App = require('../containers/App.js');
const Provider = require('react-redux').Provider;
const store = require('../store/index.js')({time: 'Day', name: 'Daniel'});

const renderTarget = document.getElementById('content');

const renderedComponent = ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  renderTarget
);
