const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    time: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      time: this.props.time,
    }
  },

  getDefaultProps: function() {
    return {
      time: 'Evening',
    }
  },

  render: function() {
    return <h1>Good {this.state.time}, {this.state.name}</h1>;
  }

});

module.exports = App;
