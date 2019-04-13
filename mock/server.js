const Koa = require('koa');
const router = require('koa-router')();
const App = new Koa();

// 首页 —— 广告（超值特惠）
let homeAdData = require('./homemock/ad');

router.get('/homead',async (ctx,next) => {
   ctx.body = homeAdData
});
// 首页 —— 推荐列表（猜你喜欢）
let homeListData = require('./homemock/list');
let homeListData1 = require('./homemock/list1');


router.get('/homelist/:city/:page',async (ctx,next) => {
   const datas = ctx.params;
   const dataCity = datas.city;
   const dataPage = datas.page;

   if (!(dataPage % 2)) {
      ctx.body = homeListData
   } else {
      ctx.body = homeListData1
   }
   if (dataCity === '杭州') {
      ctx.body = homeListData1
   }

   console.log('当前城市：',dataCity);
   console.log('当前页面：',dataPage);
});

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search');
router.get('/search/:page/:city/:category/:keyword', async (ctx,next) => {
   console.log('搜索结果页 - 搜索结果');

   // 参数
   const params = ctx.params;
   const paramsPage = params.page;
   const paramsCity = params.city;
   const paramsCategory = params.category;
   const paramsKeyword = params.keyword;

   console.log('当前页数：' + paramsPage);
   console.log('当前城市：' + paramsCity);
   console.log('当前类别：' + paramsCategory);
   console.log('关键字：' + paramsKeyword);

   ctx.body = searchListData
});
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/search/:page/:city/:category', async (ctx,next) => {
   console.log('搜索结果页 - 搜索结果');

   // 参数
   const params = ctx.params;
   const paramsPage = params.page;
   const paramsCity = params.city;
   const paramsCategory = params.category;

   console.log('当前页数：' + paramsPage);
   console.log('当前城市：' + paramsCity);
   console.log('当前类别：' + paramsCategory);

   ctx.body = searchListData
});

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/detail/info/:id', async (ctx,next) => {
   console.log('详情页 - 商户信息')

   const params = ctx.params
   const id = params.id

   console.log('商户id: ' + id)

   ctx.body = detailInfo
})
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js')
router.get('/detail/comment/:page/:id', async (ctx,next) => {
   console.log('详情页 - 用户点评')

   const params = ctx.params
   const page = params.page
   const id = params.id

   console.log('商户id: ' + id)
   console.log('当前页数: ' + page)

   ctx.body = detailComment
})

App.use(router.routes())
   .use(router.allowedMethods());
App.listen(8080,() => {
   console.log('启动8080');
});