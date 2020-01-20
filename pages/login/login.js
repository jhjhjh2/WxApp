// pages/login/login.js
import {
  homeList,
    addAdvertisements
} from "../../utils/request/request.js";

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ''
  },

  /**                                                                                                                            
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //提交
  formSubmit: function (e) {
    console.log(e.detail.value.phone)
    console.log(e.detail.value.code)


    var url = app.globalData.http + app.globalData.saveUserPhone
    var param = {
      phone: e.detail.value.phone,
      code: e.detail.value.code
    }
    homeList(url, param).then(function (res) {
      console.log(res)
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