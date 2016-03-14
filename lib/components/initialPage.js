const React = require('react');
const ReactDom = require('react-dom');

const App = React.createClass({displayName: "App",
  
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Good ", this.props.time, ", ", this.props.name), 
        React.createElement("button", {onClick: this.props.updateTime})
      )
    );
  }

});

module.exports = App;
