'use strict';

module.exports = {
  updateTime: function updateTime() {
    var currentTime = new Date(Date.now()).getHours();
    var timeString = void 0;

    if (currentTime < 12) {
      timeString = 'Morning';
    } else if (currentTime < 18) {
      timeString = 'Afternoon';
    } else if (currentTime < 22) {
      timeString = 'Evening';
    } else {
      timeString = 'Night';
    }

    return {
      type: 'CHANGE_TIME',
      time: timeString
    };
  },
  updateName: function updateName(name) {
    return {
      type: 'CHANGE_NAME',
      name: name
    };
  }
};