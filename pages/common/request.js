const app = getApp();
const Promise = require('../common/promiseRequest.js')

//检查状态是否过期
function checkRequest(url, param){
  var res
  //判断登录状态是否过期
  wx.checkSession({
    success() {
      //判断app中openidKey是否为空
      var openidKey = app.globalData.openidKey
      console.log('request openidKey:' + openidKey)
      if (openidKey == '' || openidKey == null) {
        //重新进行登录，获取openidKey
        res = wxLogin(url, param)
      } else {
        res = Promise.postRequest(url, param)
      }
    },
    fail() {
      //重新进行登录，获取openidKey
      res = wxLogin(url, param) //重新登录
    }
  })
  return res
}

function request(url, param){
  wx.request({
    url: url,
    data: param,
    success(res) {
      console.log('request:' + res)
      return res
    }
  })
}

function wxLogin(url, param){
  wx.login({
    success(res) {
      console.log('code:' + res.code)
      //后台获取openid
      wx.request({
        url: 'http://localhost:8080/WxApp/wx/getOpenid',
        data: {
          code: res.code
        },
        success(res) {
          console.log('openidKey:' + res.data)
          app.globalData.openidKey = res.data;
          request(url, param)
        }
      })
    }
  })
}

module.exports = {
  checkRequest: checkRequest,
  wxLogin: wxLogin
}