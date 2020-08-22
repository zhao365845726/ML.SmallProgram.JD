// pages/new/shoping/shoping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEdit: false,
    needMoney: 0,
    isAllSelect: false,
    shopList: [
      {
        'shop_name': '商家1',
        'is_del': false,
        'is_select': false,
        'trade_list': [
          {
            'trade_name': '商品1',
            'is_select': false,
            'is_del': false,
            'trade_number': 3,
            'trade_sever':
              [
                {
                  'trade_sever_type': 1,
                  'trade_sever_txt': '服务1',
                  'trade_server_price': 399
                }, {
                  'trade_sever_type': 2,
                  'trade_sever_txt': '服务2',
                  'trade_server_price': 299
                }
              ]
          }, {
            'trade_name': '商品2',
            'is_del': false,
            'is_select': false,
            'trade_number': 3,
            'trade_sever':
              [
                {
                  'trade_sever_type': 1,
                  'trade_sever_txt': '服务3',
                  'trade_server_price': 399
                }, {
                  'trade_sever_type': 2,
                  'trade_sever_txt': '服务4',
                  'trade_server_price': 299
                }
              ]
          },
        ]
      },
      {
        'shop_name': '商家2',
        'is_del': false,
        'is_select': false,
        'trade_list': [
          {
            'trade_name': '商品2',
            'is_del': false,
            'is_select': false,
            'trade_number': 2,
            'trade_sever':
              [
                {
                  'trade_sever_type': 1,
                  'trade_sever_txt': '服务2',
                  'trade_server_price': 699
                }, {
                  'trade_sever_type': 2,
                  'trade_sever_txt': '服务1',
                  'trade_server_price': 799
                }
              ]
          },
          {
            'trade_name': '商品3',
            'is_del': false,
            'is_select': false,
            'trade_number': 3,
            'trade_sever':
              [
                {
                  'trade_sever_type': 1,
                  'trade_sever_txt': '服务5',
                  'trade_server_price': 399
                }, {
                  'trade_sever_type': 2,
                  'trade_sever_txt': '服务6',
                  'trade_server_price': 299
                }
              ]
          },
        ]
      }
    ]
  },

  edit_shop_list: function () {
    let mIsEdit = !this.data.isEdit;
    this.setData({
      isEdit: mIsEdit
    })
    this.mNeedMoney();
    console.log(mIsEdit);
  },

  cutNumber: function (e) {
    let mShopList = this.data.shopList;
    let mTradeId = e.currentTarget.dataset.tradeId;

    mTradeId = mTradeId.split(",");
    let mTradeNumber = parseInt(mShopList[mTradeId[0]].trade_list[mTradeId[1]].trade_number) - 1;

    if (mTradeNumber <= 1) {
      mTradeNumber = 1;
    } else if (mTradeNumber >= 99) {
      mTradeNumber = 99;
    }

    this.setData({
      ['shopList[' + mTradeId[0] + '].trade_list[' + mTradeId[1] + '].trade_number']: mTradeNumber
    })
    this.mNeedMoney();
  },

  addNumber: function (e) {
    let mShopList = this.data.shopList;
    let mTradeId = e.currentTarget.dataset.tradeId;

    mTradeId = mTradeId.split(",");
    let mTradeNumber = parseInt(mShopList[mTradeId[0]].trade_list[mTradeId[1]].trade_number) + 1;

    if (mTradeNumber <= 1) {
      mTradeNumber = 1;
    } else if (mTradeNumber >= 99) {
      mTradeNumber = 99;
    }

    this.setData({
      ['shopList[' + mTradeId[0] + '].trade_list[' + mTradeId[1] + '].trade_number']: mTradeNumber
    })
    this.mNeedMoney();
  },

  //假设最大库存为99
  changeTradeNumber: function (e) {
    let value = e.detail.value;
    let mInputId = e.currentTarget.dataset.inputId;
    let mNInputId = mInputId.split(",");

    if (parseInt(value) > 99) {
      value = 99;
    } else if (parseInt(value) <= 0) {
      value = 1;
    } else if (isNaN(parseInt(value))) {
      value = 1;
    }

    this.setData({
      ['shopList[' + mNInputId[0] + '].trade_list[' + mNInputId[1] + '].trade_number']: value
    })

    console.log(value);
  },

  delTrade: function () {
    let mShopList = this.data.shopList;
    for (var x = 0; x < mShopList.length; x++) {
      if (mShopList[x].is_select) {
        this.setData({
          ['shopList[' + x + '].is_del']: true
        })
      }
      for (var y = 0; y < mShopList[x].trade_list.length; y++) {
        if (mShopList[x].trade_list[y].is_select) {
          this.setData({
            ['shopList[' + x + '].trade_list[' + y + '].is_del']: true
          })
        }
      }
    }

    console.log(mShopList);
  },

  onShopCheck: function (e) {
    let mShopList = this.data.shopList;
    let selectId = e.currentTarget.dataset.selectCheckId;
    let value = e.detail.value;

    if (value.length > 0) {
      console.log("设置为选中")
      if (!mShopList[selectId].is_select) {
        this.setData({
          ['shopList[' + selectId + '].is_select']: true
        })
      }
      for (var y = 0; y < mShopList[selectId].trade_list.length; y++) {
        if (!mShopList[selectId].trade_list[y].is_select) {
          this.setData({
            ['shopList[' + selectId + '].trade_list[' + y + '].is_select']: true
          })
        }
      }
    } else {
      console.log("设置为取消")
      if (mShopList[selectId].is_select) {
        this.setData({
          ['shopList[' + selectId + '].is_select']: false
        })
      }
      for (var y = 0; y < mShopList[selectId].trade_list.length; y++) {
        if (mShopList[selectId].trade_list[y].is_select) {
          this.setData({
            ['shopList[' + selectId + '].trade_list[' + y + '].is_select']: false
          })
        }
      }
    }
    this.isAllSelect();
    this.isNoAllSelect();
    this.mNeedMoney();
  },

  onTradeCheck: function (e) {
    let mShopList = this.data.shopList;
    let selectId = e.currentTarget.dataset.selectCheckId;
    let value = e.detail.value;

    let mNSelectId = selectId.split(",");
    // console.log(mNSelectId);

    if (value.length > 0) {
      //选中
      if (!mShopList[mNSelectId[0]].trade_list[mNSelectId[1]].is_select) {
        this.setData({
          ['shopList[' + mNSelectId[0] + '].trade_list[' + mNSelectId[1] + '].is_select']: true
        })
      }
    } else {
      // 取消选中
      if (mShopList[mNSelectId[0]].trade_list[mNSelectId[1]].is_select) {
        this.setData({
          ['shopList[' + mNSelectId[0] + '].trade_list[' + mNSelectId[1] + '].is_select']: false
        })
      }
    }

    this.isShopAllSelect(mNSelectId[0]);
    this.isNoShopAllSelect(mNSelectId[0]);
    this.isAllSelect();
    this.isNoAllSelect();
    this.mNeedMoney();
  },

  onSelectAllCheck: function (e) {
    // console.log(e.detail.value);
    let mShopList = this.data.shopList;
    if (e.detail.value.length > 0) {
      for (var x = 0; x < mShopList.length; x++) {
        if (!mShopList[x].is_select) {
          this.setData({
            ['shopList[' + x + '].is_select']: true
          })
        }
        for (var y = 0; y < mShopList[x].trade_list.length; y++) {
          if (!mShopList[x].trade_list[y].is_select) {
            this.setData({
              ['shopList[' + x + '].trade_list[' + y + '].is_select']: true
            })
          }
        }
      }
      this.isAllSelect();
      this.isNoAllSelect();
    } else {
      for (var x = 0; x < mShopList.length; x++) {
        if (mShopList[x].is_select) {
          this.setData({
            ['shopList[' + x + '].is_select']: false
          })
        }
        for (var y = 0; y < mShopList[x].trade_list.length; y++) {
          if (mShopList[x].trade_list[y].is_select) {
            this.setData({
              ['shopList[' + x + '].trade_list[' + y + '].is_select']: false
            })
          }
        }
      }
      this.isAllSelect();
      this.isNoAllSelect();
    }
  },

  isShopAllSelect: function (Shopid) {
    let mShopList = this.data.shopList;
    // shopList[ Shopid ].trade_list[ y ].is_select
    console.log(mShopList);
    let mIsShopAllSelect = true;
    for (var x = 0; x < mShopList[Shopid].trade_list.length; x++) {
      if (!mShopList[Shopid].trade_list[x].is_select) {
        if (!mShopList[Shopid].trade_list[x].is_del) {
          mIsShopAllSelect = false;
          break;
        }
      }
    }
    if (mIsShopAllSelect) {
      console.log("执行赋值");
      if (!mShopList[Shopid].is_select) {
        this.setData({
          ['shopList[' + Shopid + '].is_select']: true
        })
      }
    }
  },

  isNoShopAllSelect: function (Shopid) {
    let mShopList = this.data.shopList;
    // shopList[ Shopid ].trade_list[ y ].is_select
    console.log(mShopList);
    let mIsShopAllSelect = false;
    for (var x = 0; x < mShopList[Shopid].trade_list.length; x++) {
      if (!mShopList[Shopid].trade_list[x].is_select) {
        if (!mShopList[Shopid].trade_list[x].is_del) {
          mIsShopAllSelect = true;
          break;
        }
      }
    }
    if (mIsShopAllSelect) {
      console.log("执行赋值");
      if (mShopList[Shopid].is_select) {
        this.setData({
          ['shopList[' + Shopid + '].is_select']: false
        })
      }
    }
  },

  isAllSelect: function () {
    let mShopList = this.data.shopList;
    let mAllSelectTag = true;
    for (var x = 0; x < mShopList.length; x++) {
      if (!mShopList[x].is_select) {
        if (!mShopList[x].is_del) {
          mAllSelectTag = false;
          break;
        }
      }
      for (var y = 0; y < mShopList[x].trade_list.length; y++) {
        if (!mShopList[x].trade_list[y].is_select) {
          if (!mShopList[x].trade_list[y].is_del) {
            mAllSelectTag = false;
            break;
          }
        }
      }
    }
    if (mAllSelectTag) {
      // console.log("是全选");
      if (!this.data.isAllSelect) {
        this.setData({
          isAllSelect: true
        })
      }
    }
  },

  isNoAllSelect: function () {
    let mShopList = this.data.shopList;
    let mAllSelectTag = false;

    // console.log(mShopList);

    for (var x = 0; x < mShopList.length; x++) {
      if (!mShopList[x].is_select) {
        if (!mShopList[x].is_del) {
          mAllSelectTag = true;
          break;
        }
      }
      for (var y = 0; y < mShopList[x].trade_list.length; y++) {
        if (!mShopList[x].trade_list[y].is_select) {
          if (!mShopList[x].trade_list[y].is_del) {
            mAllSelectTag = true;
            break;
          }
        }
      }
    }
    if (mAllSelectTag) {
      if (this.data.isAllSelect) {
        this.setData({
          isAllSelect: false
        })
      }
      console.log("未全部选中");
    }
  },

  mNeedMoney: function () {
    let mShopList = this.data.shopList;
    let allNeedMoney = 0;
    for (var x = 0; x < mShopList.length; x++) {
      for (var y = 0; y < mShopList[x].trade_list.length; y++) {
        if (mShopList[x].trade_list[y].is_select) {
          if (!mShopList[x].trade_list[y].is_del) {
            let tradeMoney = mShopList[x].trade_list[y].trade_sever[0].trade_server_price;
            let tradeNumber = mShopList[x].trade_list[y].trade_number;
            allNeedMoney = allNeedMoney + tradeMoney * tradeNumber;
          }
        }
      }
    }
    // console.log(allNeedMoney);
    this.setData({
      needMoney: allNeedMoney
    })
  },

  // console.log(Object.keys(mShopList[x]));
  // 深层拷贝数组（暂未实现）
  goNextPage:function(){
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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