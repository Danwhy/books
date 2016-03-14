module.exports = function time(state, action) {
  if (!state) {
    state = Date.now();
  }
  switch(action.type) {
    case 'CHANGE_TIME':
      return action.time;
    default:
      return state;
  }
}
