const Koa = require('koa');
const router = require('koa-router')();
const App = new Koa();


let homeAdData = require('./homemock/ad');

router.get('/homead',async (ctx,next) => {
   ctx.body = homeAdData
});

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

   console.log('当前城市：',dataCity);
   console.log('当前页面：',dataPage);
});



App.use(router.routes())
   .use(router.allowedMethods());
App.listen(8080,() => {
   console.log('启动8080');
});