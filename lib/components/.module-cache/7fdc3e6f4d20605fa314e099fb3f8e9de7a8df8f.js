const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({displayName: "App",

  getInitialState: function() {
    return {name: this.props.name}
  },

  render: function() {
    return React.createElement("h1", null, "Hi ", this.state.name);
  }

});

module.exports = App;
