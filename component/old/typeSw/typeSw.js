// component/type_sw/typeSw.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    AllListData: {
      type: Array,
      value: [{
        page: 1,
        pglist: [{
          imgSrcUrl:"/assect/img/type1.png",
          text:"京东超市"
        },
        {
          imgSrcUrl:"/assect/img/type2.png",
          text:"京东家电"
        },
        {
          imgSrcUrl:"/assect/img/type3.png",
          text:"京东服饰"
        },
        {
          imgSrcUrl:"/assect/img/type4.png",
          text:"京东手机"
        },
        {
          imgSrcUrl:"/assect/img/type5.png",
          text:"唯品会"
        }]
      },{
        page: 2,
        pglist: [{
          imgSrcUrl:"/assect/img/type6.png",
          text:"京东超市"
        },
        {
          imgSrcUrl:"/assect/img/type7.png",
          text:"京东家电"
        },
        {
          imgSrcUrl:"/assect/img/type8.png",
          text:"京东服饰"
        },
        {
          imgSrcUrl:"/assect/img/type9.png",
          text:"京东手机"
        },
        {
          imgSrcUrl:"/assect/img/type10.png",
          text:"唯品会"
        }]
      }]
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

  }
})
