// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow_more: false,
    top_title: [
      {
        name: "综合",
        select: true,
        isClick: false,
        isShowMore: false,
        more: [{
          name: "综合",
          isSelect: true
        },
        {
          name: "最新上架",
          isSelect: true
        },
        {
          name: "价格最低",
          isSelect: true
        },
        {
          name: "价格最高",
          isSelect: true
        },
        {
          name: "评价最多",
          isSelect: true
        }]
      },
      {
        name: "销量",
        isClick: false,
        select: false,
        isShowMore: false

      }, {
        name: "服务",
        isClick: false,
        select: false,
        isShowMore: false
      }
    ],
    filterbt: [
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
      {
        filter_index: 0,
        filter_txt: "热8",
        filter_have_more: false
      },
    ]
  },
  show_more: function () {
    var x = !this.data.isShow_more;
    this.setData({
      isShow_more:x
    })
    console.log(x);
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