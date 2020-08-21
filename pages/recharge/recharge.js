// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    phone_number: "",
    //可选择积分数量
    select_integral_number: ['0', '853'],

    // 选中套餐价格
    needPrice: 0,

    //选择积分的选项框的index
    index: 0,

    //优惠额度
    preferential_Quota: 0,

    //积分数量
    integral_number: 0,

    // 是否可以支付
    canPay: false,

    // 顶部选择话费充值还是流量充值
    selectTopTabIndex: 0,

    // 显示运营商
    showNumberInfo: false,

    // 显示清除按钮
    showClear: false,

    // 号码错误提示
    phoneNumberError: false,

    //号码运营商
    numberOperator: "",

    //结算金额是多少钱
    needMoney: "",

    topTabContent: [
      {
        tabTxt: "话费充值",
        tabImg: "/assect/img/new_img/phone_recharge.png",
        isDisplay: true
      },
      {
        tabTxt: "流量充值",
        tabImg: "/assect/img/new_img/data_recharge.png",
        isDisplay: true
      },
      {
        tabTxt: "加油卡",
        tabImg: "/assect/img/new_img/fuel_card.png",
        isDisplay: false
      }
    ],
    setMeal:
      [
        [{
          setMealTxt: "10元",
          showTips: "售9.98元",
          price: 9.98,
          isSelect: false
        },
        {
          setMealTxt: "20元",
          showTips: "售19.96元",
          price: 19.96,
          isSelect: false
        },
        {
          setMealTxt: "30元",
          showTips: "售29.94元",
          price: 29.94,
          isSelect: false
        }, {
          setMealTxt: "50元",
          showTips: "售49.90元",
          price: 49.90,
          isSelect: false
        }, {
          setMealTxt: "100元",
          showTips: "售99.80元",
          price: 99.80,
          isSelect: false
        }, {
          setMealTxt: "200元",
          showTips: "售199.60元",
          price: 199.60,
          isSelect: false
        }, {
          setMealTxt: "300元",
          showTips: "售299.40元",
          price: 299.40,
          isSelect: false
        }, {
          setMealTxt: "500元",
          showTips: "售499.00元",
          price: 499.00,
          isSelect: false
        }],
        [{
          setMealTxt: "100M",
          showTips: "售10.00元",
          price: 10.00,
          isSelect: false
        },
        {
          setMealTxt: "200M",
          showTips: "售15.00元",
          price: 15.00,
          isSelect: false
        },
        {
          setMealTxt: "300M",
          showTips: "售20.00元",
          price: 20.00,
          isSelect: false
        }, {
          setMealTxt: "500M",
          showTips: "售24.00元",
          price: 24.00,
          isSelect: false
        }, {
          setMealTxt: "1G",
          showTips: "售30.80元",
          price: 30.80,
          isSelect: false
        }, {
          setMealTxt: "2G",
          showTips: "售50.00元",
          price: 50.00,
          isSelect: false
        }, {
          setMealTxt: "3G",
          showTips: "售70.00元",
          price: 70.00,
          isSelect: false
        }, {
          setMealTxt: "5G",
          showTips: "售100.00元",
          price: 100.00,
          isSelect: false
        }]
      ],
  },

  clearSelect: function () {
    let mSetMeal = this.data.setMeal;
    for (var x = 0; x < mSetMeal.length; x++) {
      for (var y = 0; y < mSetMeal[x].length; y++) {
        // console.log(mSetMeal[x][y]);
        if (mSetMeal[x][y].isSelect) {
          this.setData({
            ['setMeal[' + x + '][' + y + '].isSelect']: false
          })
        }
      }
    }
  },
  changeTopIndex: function (e) {
    // console.log(e);
    var NewIndex = e.currentTarget.dataset.clickIndex;
    // console.log(NewIndex);
    if (NewIndex != this.data.selectTopTabIndex && NewIndex != 2) {
      this.setData({
        selectTopTabIndex: NewIndex
      })
      this.clearSelect();
      let getNeedPrice = this.data.setMeal[this.data.selectTopTabIndex][3].price;
      this.setData({
        ['setMeal[' + NewIndex + '][3].isSelect']: true,
        needPrice: getNeedPrice,
      })
    }
  },

  checkPhoneNumber: function (telphone) {
    var isChinaMobile = /^1(3[4-9]|5[012789]|8[23478]|4[7]|7[8])\d{8}$/; //移动
    var isChinaUnion = /^1(3[0-2]|5[56]|8[56]|4[5]|7[6])\d{8}$/; //联通
    var isChinaTelcom = /^1(3[3])|(8[019])\d{8}$/; //电信

    if (telphone.length !== 11) {
      this.setData({
        phoneNumberError: true,
        showNumberInfo: false,
        showClear: true,
        canPay: false
      })
      // alert("未检测到正确的手机号码");
    } else {
      if (isChinaMobile.test(telphone)) {
        // alert("移动");
        this.setData({
          phoneNumberError: false,
          showNumberInfo: true,
          showClear: false,
          numberOperator: "移动",
          canPay: true,
          phone_number: telphone
        })
      } else if (isChinaUnion.test(telphone)) {
        this.setData({
          phoneNumberError: false,
          showNumberInfo: true,
          showClear: false,
          numberOperator: "联通",
          canPay: true,
          phone_number: telphone
        })
        // alert("联通");
      } else if (isChinaTelcom.test(telphone)) {
        this.setData({
          phoneNumberError: false,
          showNumberInfo: true,
          showClear: false,
          numberOperator: "电信",
          canPay: true,
          phone_number: telphone
        })
        // alert("电信");
      } else {
        this.setData({
          phoneNumberError: true,
          showNumberInfo: false,
          showClear: true,
          canPay: false
        })
        // alert("未检测到正确的手机号码");
      }
    }
  },


  inputNumber: function (e) {
    // console.log(e);
    this.setData({
      phoneNumberError: false,
      showNumberInfo: false,
      showClear: true
    })
    this.checkPhoneNumber(e.detail.value)
  },

  clearInputValue: function () {
    this.setData({
      phoneNumberError: false,
      showNumberInfo: false,
      showClear: false
    })
  },

  setSelectMeal: function (e) {
    if (this.data.canPay) {
      this.clearSelect();
      console.log(e);
      // 取到选中的套餐
      let mSelectTopTabIndex = this.data.selectTopTabIndex;
      let mSelectMeal = e.currentTarget.dataset.selectMeal;
      // 取到套餐中的金额
      let mSetMeal = this.data.setMeal;
      let mPrice = mSetMeal[mSelectTopTabIndex][mSelectMeal].price + 0;
      //算出需要的金额
      let mNeedMoney = mPrice - this.data.preferential_Quota;
      mNeedMoney = mNeedMoney.toFixed(2);
      this.setData({
        ['setMeal[' + mSelectTopTabIndex + '][' + mSelectMeal + '].isSelect']: true,
        needPrice: mPrice,
        needMoney: mNeedMoney,
      });
    }
  },

  setintegralNumber: function (e) {
    let mNumberIndex = e.detail.value;
    // let mSelectTopTabIndex = this.data.selectTopTabIndex
    let setIntegralNumber = this.data.select_integral_number[mNumberIndex];
    let setPreferentialQuota = setIntegralNumber * 0.01;
    setPreferentialQuota = setPreferentialQuota.toFixed(2);

    let mNeedPrice = this.data.needPrice;
    console.log(this.data.needMoney);
    if (parseInt(mNeedPrice) > 0 && !isNaN(parseInt(mNeedPrice))) {
      let mNeedMoney = mNeedPrice - setPreferentialQuota;
      mNeedMoney = mNeedMoney.toFixed(2);
      this.setData({
        integral_number: setIntegralNumber,
        preferential_Quota: setPreferentialQuota,
        needMoney: mNeedMoney
      })
    }
  },

  useNumber: function (e) {
    let mUseNumer = e.detail.value;
    mUseNumer = parseInt(mUseNumer);
    if (parseInt(mUseNumer) > parseInt(853)) {
      mUseNumer = 853;
    } else if (parseInt(mUseNumer) <= parseInt(0)) {
      mUseNumer = 0;
    } else if (isNaN(parseInt(mUseNumer))) {
      mUseNumer = 0;
    }
    let mPreferential_Quota = mUseNumer * 0.01;
    mPreferential_Quota = mPreferential_Quota.toFixed(2);
    let mNeedMoney = 0;
    if (parseInt(this.data.needPrice) > 0 && !isNaN(parseInt(mUseNumer))) {
      mNeedMoney = this.data.needPrice - mPreferential_Quota;
      mNeedMoney = mNeedMoney.toFixed(2);
    }
    this.setData({
      integral_number: mUseNumer,
      preferential_Quota: mPreferential_Quota,
      needMoney: mNeedMoney
    })
  },

  toNextPage: function () {
    /* 当前日期，充值号码,套餐*/
    let number = this.data.phone_number;
    let mNeedMoney = this.data.needMoney;
    wx.reLaunch({
      url: '/pages/order_details/order_details?number=' + number + "&needMoney=" + mNeedMoney,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.clearSelect();
    //设置初始推荐的套餐
    let getNeedPrice = this.data.setMeal[this.data.selectTopTabIndex][3].price;
    this.setData({
      ['setMeal[' + this.data.selectTopTabIndex + '][3].isSelect']: true,
      needPrice: getNeedPrice,
      needMoney: getNeedPrice
    })
    console.log(getNeedPrice);
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