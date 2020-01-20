//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    openidKey: '',
    cookie: '',




    //url
    http: 'http://localhost:8080/WxApp/',
    checkUserInfo: 'userInfo/checkUserInfo',
    getOpenidUrl: 'wx/getOpenid',
    saveUserInfo: 'userInfo/saveUserInfo',
    saveUserPhone: 'userInfo/saveUserPhone'
  }
})