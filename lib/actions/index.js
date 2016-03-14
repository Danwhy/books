'use strict';
module.exports = {
  updateTime() {
    let currentTime = new Date(Date.now()).getHours();
    let timeString;

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
    }
  }
}
