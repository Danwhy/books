const combineReducers = require('redux').combineReducers;
const time = require('./time.js');
const name = require('./name.js');

const rootReducer = combineReducers({
  time: time,
  name: name
});

module.exports = rootReducer;
