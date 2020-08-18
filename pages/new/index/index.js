// pages/new/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ScreenH: "750rpx",
    NoTopBarH: "0rpx",
    isShowMore: false,
    topbarSelectIndex: 0,
    top_bar_list: [
      {
        index: 0,
        tab_txt: "首页",
      },
      {
        index: 1,
        tab_txt: "电脑办公",
      },
      {
        index: 2,
        tab_txt: "食品饮料1",
      },
      {
        index: 3,
        tab_txt: "食品饮料2",
      },
      {
        index: 4,
        tab_txt: "食品饮料3",
      },
      {
        index: 5,
        tab_txt: "食品饮料4",
      }
    ]
  },


  show_more_tab: function () {
    this.setData({
      isShowMore: !this.data.isShowMore
    })
  },

  onClick: function (e) {
    var onClickIndex = e.currentTarget.dataset.topIndex;
    this.setData({
      topbarSelectIndex: onClickIndex,
      isShowMore: false
    });
    console.log(onClickIndex);
  },

  // 禁止手动滑动swiper
  catchTouchMove: function (res) {
    return false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        let setHeight = height + "rpx";
        let noTopTabHeight = height - 140;
        let noTopTabH = noTopTabHeight + "rpx"
        this.setData({
          ScreenH: setHeight,
          NoTopBarH: noTopTabH
        });

        console.log(noTopTabH);
      },
    });
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