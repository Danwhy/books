'use strict';

var combineReducers = require('redux').combineReducers;
var time = require('./time.js');
var name = require('./name.js');

var rootReducer = combineReducers({
  time: time,
  name: name
});

module.exports = rootReducer;