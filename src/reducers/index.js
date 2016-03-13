const combineReducers = requie('redux').combineReducers;
const time = require('./time.js');

const rootReducer = combineReducers({
  time: time
});

module.exports = rootReducer;
