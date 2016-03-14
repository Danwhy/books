module.exports = {
  updateTime() {
    console.log('sent');
    return {
      type: 'CHANGE_TIME',
      time: Date.now()
    }
  }
}
