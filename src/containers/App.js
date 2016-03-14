const bindActionCreators = require('redux').bindActionCreators;
const connect = require('react-redux').connect;
const Component = require('../../lib/components/initialPage.js');
const Actions = require('../actions/index.js');

function mapStateToProps(state) {
  return {
    time: state.time,
    name: state.name
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Component);
