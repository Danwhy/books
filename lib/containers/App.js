'use strict';

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var Component = require('../../lib/components/initialPage.js');
var Actions = require('../actions/index.js');

function mapStateToProps(state) {
  return {
    time: state.time,
    name: state.name
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Component);