module.exports = {
  updateTime() {
    console.log("CLICK");
    return {
      type: 'CHANGE_TIME',
      time: Date.now()
    }
  }
}
