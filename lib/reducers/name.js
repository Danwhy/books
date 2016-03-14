module.exports = function time(state, action) {
  if (!state) {
    state = 'User';
  }
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
}
