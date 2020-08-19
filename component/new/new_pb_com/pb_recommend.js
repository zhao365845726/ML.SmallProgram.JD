// component/new/new_pb_com/pb_recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // comNeedMore:{
    //   type:Boolean,
    //   value:false
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    comNeedMore: false,
    select: true,
    show_height: 300,
    show_recommend_number: 10,
    selectIndex: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getMoreRecommend: function () {
      let more = this.data.show_recommend_number + 10;
      this.setData({
        show_recommend_number: more
      })
      console.log(this.data.show_recommend_number);
    },
    OnClick: function (e) {
      let mSelectInddex = e.currentTarget.dataset.selectindex;
      console.log(mSelectInddex);
      this.setData({
        selectIndex: mSelectInddex
      })
    },
    toNextPage: function () {
      wx.redirectTo({
        url:'/pages/details/details'
      })
    }
  }
})
