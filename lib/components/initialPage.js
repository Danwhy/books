'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  displayName: 'App',


  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Good ',
        this.props.time,
        ', ',
        this.props.name
      ),
      React.createElement('button', { onClick: this.props.updateTime })
    );
  }

});

module.exports = App;