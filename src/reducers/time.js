module.exports = function time(state, action) {
  switch(action.type) {
    case 'CHANGE_TIME':
      return action.time;
      break;
    default:
      return state;
  }
}
