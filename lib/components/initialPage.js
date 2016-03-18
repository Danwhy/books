'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  displayName: 'App',


  render: function render() {
    var _this = this;

    var input = void 0;
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
      React.createElement(
        'button',
        { onClick: this.props.updateTime },
        'Get Time'
      ),
      React.createElement('input', { type: 'text', placeholder: 'Name', ref: function ref(node) {
          input = node;
        } }),
      React.createElement(
        'button',
        { onClick: function onClick() {
            return _this.props.updateName(input.value);
          } },
        'Change Name'
      )
    );
  }

});

module.exports = App;