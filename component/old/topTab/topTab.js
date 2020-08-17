// component/topTab/topTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    getData: {
      type: Array,
      value: [
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
    tab_select: {
      type: Boolean,
      value: false
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
    showType: function () {
      console.log("显示所有type");
    },

    clickTap: function (event) {
      console.log("点击了这个tab:");

      // 点击了第几个（从零开始）
      var clickNum = event.currentTarget.dataset.mclick;
      //tab有几个(从零开始)
      var tabNum = this.data.getData.length;

      for (var x = 0; x < tabNum; x++) {
        console.log(this.data.getData[x].tabTxt);
        if (x != clickNum) {
          this.setData({
            ['getData[' + x + '].select']: false
          });
        } else {
          this.setData({
            ['getData[' + x + '].select']: true
          });
        }
      }
      console.log(this.data.getData);
    }
  }
})
