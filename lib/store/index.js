'use strict';

var createStore = require('redux').createStore;
var rootReducer = require('../reducers/index.js');

module.exports = function configureStore(initialState) {
  var store = createStore(rootReducer, initialState);

  return store;
};