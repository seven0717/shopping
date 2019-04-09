const Koa = require('koa');
const router = require('koa-router')();
const App = new Koa();


let homeAdData = require('./homemock/ad');

router.get('/api/homead',async (ctx,next) => {
   ctx.body = homeAdData
});





App.use(router.routes())
   .use(router.allowedMethods());
App.listen(8080,() => {
   console.log('启动8080');
});