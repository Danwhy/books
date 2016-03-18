const React = require('react');
const ReactDom = require('react-dom');

const App = React.createClass({

  render: function() {
    let input;
    return (
      <div>
        <h1>Good {this.props.time}, {this.props.name}</h1>
        <button onClick={this.props.updateTime}>Get Time</button>
        <input type="text" placeholder="Name" ref={(node) => {input = node}}></input>
        <button onClick={() => this.props.updateName(input.value)}>Change Name</button>
      </div>
    );
  }

});

module.exports = App;
