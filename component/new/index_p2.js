// component/new/index_p2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // "isNeedMore": {
    //   type: Boolean,
    //   value: false
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    screen_h: "750rpx",
    // isNeedMore:false
  },

  created: function () {
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
        console.log("成功执行获取屏幕宽高");
      },
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
