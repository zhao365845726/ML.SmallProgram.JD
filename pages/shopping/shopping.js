
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allShopPrice: "0.00",
    lastCheck: "",
    shopCar: [
      {
        storeName: "商家1",
        storeId: 0,
        isSelect: false,
        shopList: [
          {
            faid: 0,
            shop_id: 0,
            shopName: "商品1商品1商品1商品1商品1商品1商品1商品1",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: "套餐1套餐1套餐1套餐1",
            shopPrice: 4000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 0,
            shop_id: 1,
            shopName: "商品2",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 2000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 0,
            shop_id: 2,
            shopName: "商品3",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 1000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 0,
            shop_id: 3,
            shopName: "商品4",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 3000,
            isSelect: false,
            shopNumber: 1
          },
        ]
      }, {
        storeName: "商家1",
        isSelect: false,
        storeId: 1,
        shopList: [
          {
            faid: 1,
            shop_id: 0,
            shopName: "商品1",
            shopType: 1,
            shopImgUrl: "/assect/img/shop1.png",
            shopPrice: 4000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 1,
            shop_id: 1,
            shopName: "商品2",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 2000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 1,
            shop_id: 2,
            shopName: "商品3",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 1000,
            isSelect: false,
            shopNumber: 1
          },
          {
            faid: 1,
            shop_id: 3,
            shopName: "商品4",
            shopImgUrl: "/assect/img/shop1.png",
            shopType: 1,
            shopPrice: 3000,
            isSelect: false,
            shopNumber: 1
          },
        ]
      }
    ]
  },

  less_number: function (event) {
    console.log("减少商品数量");
    var getitem = event.currentTarget.dataset.getitem;
    var getFaId = getitem.faid;
    var getShopId = getitem.shop_id;
    if (getitem.shopNumber > 0) {
      var y = getitem.shopNumber - 1;
      this.setData({
        // shopCar[getFaId].shopList[getShopId]:
        ['shopCar[' + getFaId + '].shopList[' + getShopId + '].shopNumber']: y
      })
      this.calculation_all_money();
    } else {
      console.log("不能再减了");
      //这里的数组操作还存在问题,暂时放弃
    }
  },
  openPage: function () {
    wx.redirectTo({
      url:"/pages/settlement/settlement"
    })
  },
  add_number: function (event) {
    console.log("减少商品数量");
    var getitem = event.currentTarget.dataset.getitem;
    if (getitem.shopNumber >= 0) {
      var getFaId = getitem.faid;
      var getShopId = getitem.shop_id;
      var y = getitem.shopNumber + 1;
      this.setData({
        // shopCar[getFaId].shopList[getShopId]:
        ['shopCar[' + getFaId + '].shopList[' + getShopId + '].shopNumber']: y
      })
      this.calculation_all_money();
    } else {
      console.log("不能再加了");
    }
  },

  calculation_all_money: function () {
    console.log("方法被调用")
    var shopCar = this.data.shopCar;
    var AllShopPrice = 0;
    for (var x = 0; x < shopCar.length; x++) {
      var shopList = shopCar[x].shopList;
      console.log(shopList);
      for (var y = 0; y < shopList.length; y++) {
        AllShopPrice = shopList[y].shopPrice * shopList[y].shopNumber + AllShopPrice;
      }
    }
    this.setData({
      allShopPrice: AllShopPrice
    })

  },

  checkboxChange: function (e) {
    console.log(e.detail.value);
    var mValue = e.detail.value;
    for (var i = 0; i < mValue.length; i++) {
      // console.log(mValue);
      var nValue = mValue[i].split(",")
      if (nValue.length <= 1) {
        // console.log("nValue.length:" + nValue.length);
        var nShopCar = this.data.shopCar;
        var shopList = nShopCar[nValue].shopList;
        for (var x = 0; x < shopList.length; x++) {
          this.setData({
            ['shopCar[' + nValue + '].shopList[' + x + '].isSelect']: true
          })
        }
        console.log(shopList);
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.calculation_all_money();
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