const React = require('react');
const ReactDom = require('react-dom');

const App = React.createClass({
  
  render: function() {
    return (
      <div>
        <h1>Good {this.props.time}, {this.props.name}</h1>
        <button onClick={this.props.updateTime}></button>
      </div>
    );
  }

});

module.exports = App;
