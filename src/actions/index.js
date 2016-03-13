module.exports = {
  getTime(time) {
    return {
      type: 'CHANGE_TIME',
      time: Date.now();
    }
  }
}
