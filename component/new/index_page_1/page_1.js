// component/new/index_page_1/page_1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    countdownTime: "",
    AllServerListData: [{
      page: 1,
      pglist: [{
        imgSrcUrl: "/assect/img/new_img/type_0.png",
        text: "京东超市",
        toUrl: "/123123"
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_1.png",
        text: "京东家电",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_2.png",
        text: "京东服饰",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_3.png",
        text: "京东手机",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_4.png",
        text: "京喜购物",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_5.png",
        text: "充值中心",
        toUrl: "/pages/recharge/recharge"
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_6.png",
        text: "领京豆",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_7.png",
        text: "领优惠券",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_8.png",
        text: "免费水果",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_9.png",
        text: "京东萌宠",
        toUrl: ""
      }

      ]
    }, {
      page: 2,
      pglist: [{
        imgSrcUrl: "/assect/img/new_img/type_0.png",
        text: "京东超市",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_1.png",
        text: "京东家电",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_2.png",
        text: "京东服饰",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_3.png",
        text: "京东手机",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_4.png",
        text: "京喜购物",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_5.png",
        text: "充值中心",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_6.png",
        text: "领京豆",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_7.png",
        text: "领优惠券",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_8.png",
        text: "免费水果",
        toUrl: ""
      },
      {
        imgSrcUrl: "/assect/img/new_img/type_9.png",
        text: "京东萌宠",
        toUrl: ""
      }]
    }],
    SpikeCommodityListData: [{
      Index: 0,
      CommodityName: "C001",
      CommodityImage: "",
      fomShopId: "S001",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566"
    }, {
      Index: 1,
      CommodityName: "C002",
      fomShopId: "S002",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    }, {
      Index: 2,
      CommodityName: "C003",
      fomShopId: "S003",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    }, {
      Index: 3,
      CommodityName: "C004",
      fomShopId: "S004",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    },
    {
      Index: 4,
      CommodityName: "C005",
      fomShopId: "S005",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    },
    {
      Index: 5,
      CommodityName: "C006",
      fomShopId: "S006",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    },
    {
      Index: 6,
      CommodityName: "C007",
      fomShopId: "S007",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    },
    {
      Index: 7,
      CommodityName: "C008",
      fomShopId: "S001",
      CommodityImage: "",
      CommoditySpikePrice: "￥4365",
      CommodityOldPrice: "￥4566",
    },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPage: function (e) {
      // console.log(e);
      var toUrl = e.currentTarget.dataset.toUrl;
      // console.log(toUrl);
      // // console.log(toUrl.trim().length != 0);
      if (toUrl.trim().length != 0) {
        wx.reLaunch({
          url: toUrl,
          success: function () {
            console.log("启动成功");
          },
          fail: function (e) {
            console.log(e);
          }
        })
      }
    }
  }
})
