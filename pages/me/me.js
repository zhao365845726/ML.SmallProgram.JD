// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_other: [
      {
        text: "我的拼团",
        img_url: "/assect/img/icon_1.png",
        id: 1
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_2.png",
        id: 2
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_3.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_4.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_1.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_2.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_3.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_4.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_5.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_1.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_2.png",
        id: 3
      }, {
        text: "我的拼团",
        img_url: "/assect/img/icon_3.png",
        id: 3
      }
    ]
  },

  toPay:function(){
    wx.redirectTo({
      url:'/pages/me/order/me_order'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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