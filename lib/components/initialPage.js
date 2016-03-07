const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({displayName: "App",

  getInitialState: function() {
    return {
      name: this.props.name,
      time: 'Evening'
    }
  },

  render: function() {
    return React.createElement("h1", null, "Good ", this.state.time, ", ", this.state.name);
  }

});

module.exports = App;
