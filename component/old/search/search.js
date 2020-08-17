// component/ search/ search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    search_data:{
      type:String,
      value:"内存条"
    }
  },
  

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    OpenCam:function(){
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
        }
      })
      // console.log("打开相机");
    },
  }
})
