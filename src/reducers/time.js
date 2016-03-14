module.exports = function time(state, action) {
  if (!state) {
    state = 'Day';
  }
  switch(action.type) {
    case 'CHANGE_TIME':
      return action.time;
    default:
      return state;
  }
}
