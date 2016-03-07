const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({

  getInitialState: function() {
    return {
      name: this.props.name,
      time: 'Evening'
    }
  },

  render: function() {
    return <h1>Good {this.state.time}, {this.state.name}</h1>;
  }

});

module.exports = App;
