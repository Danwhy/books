const createStore = require('redux').createStore;
const rootReducer = require('../reducers/index.js');

module.exports = function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  return store;
}
