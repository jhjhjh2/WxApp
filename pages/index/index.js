// pages/index/index.js
const app = getApp();

import {
  homeList,
  addAdvertisements
} from "../../utils/request/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    //微信登录获取code
    wx.login({
      success(res) {
        console.log('code:' + res.code)
        //检查code是否过期
        wx.checkSession({
          success() {
            //后台获取openid
            wx.request({
              url: app.globalData.http + app.globalData.getOpenidUrl,
              data: {
                code: res.code
              },
              success(res) {
                console.log('openidKey:' + res.header["Set-Cookie"])
                app.globalData.openidKey = res.data;
                app.globalData.cookie = res.header["Set-Cookie"]

                //验证用户是否登录(数据库)
                var url = app.globalData.http + app.globalData.checkUserInfo
                var param = {
                  openidKey: res.data
                }
                homeList(url, param).then(function (res) {
                  //获取结果
                  var result = res.data
                  // console.log(result)
                  if(result == 0){
                    //没有登录过，跳转登录页面
                    wx.reLaunch({
                      url: '/pages/login/login'
                    })
                  }else{
                    //已经登录过，跳转项目首页
                    wx.reLaunch({
                      url: '/pages/login/login'
                    })
                  }
                })
              }
            })
          },
          fail() {
            wx.login() //重新登录
          }
        })
      },
      fail() {
        wx.login()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})