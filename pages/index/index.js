//index.js
// 当前页面说明
// 顶部tab的数据使用getData里面的数据，
// 点击顶部tab按钮或滑动下方页面，
// 会改变data_one的值与getData内部的select的值（同时改变）

//获取应用实例
const app = getApp()

//Page Object
Page({
  data: {
    screen_h: "750rpx",
    data_one: 0,
    tab_select: false,
    getData: [
      {
        "tabTxt": "首页",
        "select": true,
        "url": "#",
        "id": 0
      },
      {
        "tabTxt": "电脑办公",
        "select": false,
        "url": "#",
        "id": 1
      }, {
        "tabTxt": "食品饮料1",
        "select": false,
        "url": "#",
        "id": 2
      },
      {
        "tabTxt": "食品饮料2",
        "select": false,
        "url": "#",
        "id": 3
      },
      {
        "tabTxt": "食品饮料3",
        "select": false,
        "url": "#",
        "id": 4
      },
      {
        "tabTxt": "食品饮料4",
        "select": false,
        "url": "#",
        "id": 5
      }
    ]
  },

  //显示更多顶部tabbar
  showType: function () {
    var Nselect = !this.data.tab_select;
    this.setData({
      tab_select: Nselect
    });
    console.log("点击顶部更多类型下拉框,状态" + Nselect);
  },

  clickTap: function (event) {
    console.log("点击了这个tab:");

    // 点击了第几个（从零开始）
    var clickNum = event.currentTarget.dataset.mclick;
    //tab有几个(从零开始)
    var tabNum = this.data.getData.length;

    for (var x = 0; x < tabNum; x++) {
      if (x != clickNum) {
        this.setData({
          ['getData[' + x + '].select']: false,
          tab_select: false
        });
      } else {
        this.setData({
          ['getData[' + x + '].select']: true,
          data_one: x,
          tab_select: false
        });
      }
    }
    console.log(this.data.data_one);
  },

  // 实现swiper与顶部bar滑动绑定
  changeBar: function (event) {
    var mCurrent = event.detail.current;
    if (this.data.getData[mCurrent].select) {
      console.log("当前页");
    } else {
      var tabNum = this.data.getData.length;
      for (var y = 0; y < tabNum; y++) {
        if (y != mCurrent) {
          this.setData({
            ['getData[' + y + '].select']: false
          });
        } else {
          this.setData({
            ['getData[' + y + '].select']: true,
            data_one: y
          });
          console.log(this.data.data_one);
        }
      }
    }
  },
  // // 禁止手动滑动swiper
  // catchTouchMove: function (res) {
  //   return false
  // },

  //获取屏幕高度
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        let setHeight = height + "rpx";
        this.setData({
          screen_h: setHeight
        });
        console.log(this.data.screen_h);
      },
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});
