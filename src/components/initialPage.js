const React = require('react');
const ReactDom = require('react-dom');

var App = React.createClass({

  render: function() {
    console.log('props',this.props);
    return (
      <div>
        <h1>Good {this.props.time}, {this.props.name}</h1>
        <button onClick={this.props.updateTime}></button>
      </div>
    );
  }

});

module.exports = App;
