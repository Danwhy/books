const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({

  getInitialState: function() {
    return {name: this.props.name}
  },

  render: function() {
    return <h1>Hi {this.state.name}</h1>;
  }

});

module.exports = App;
