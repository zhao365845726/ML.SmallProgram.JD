# 已完成一个大致流程
## 首页 =》 点击 精选（猜你喜欢）中的任何一项 => 商品页面 =》 点击 加入购物车 =》 购物车页面 =》 点击 结算 =》结算页面 =》 微信支付（假支付）=》我的页面 =》 点击 待付款 =》 订单详情页面

# 8/21
## 重构购物车页面，话费充值页面充值完毕后的详情页也已添加(页面的实现并不是很好看)
### 明天计划:
### 购物详情页面添加立即购买功能，传参数给购物车页面，实现购物车页面逻辑

# 8/22
## 实现购物车逻辑。（包括全选购物车，删除购物车，计算购物车中选中物品价格，删除物品等功能）

# index
## index.js已经重构,可点击首页中 精选（猜你喜欢） 进入下一个页面
# recommend 尚未重构
## 同上

# category
## 使用具体px布局,可点击热门搜索中的“显卡”项目（随便哪项都可以）跳转到shopList页面

# shopList
## 可点击商品列表中的其中一项，进入details页面

# details
## 将一部分css写作公用css，随后可提取到其他页面使用