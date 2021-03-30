const koa = require('koa');
const HomeRoutes = require('./routes/home.router'); 
const HomeRoutes2 = require('./routes/posts.routes'); 
const bodyparser = require('koa-bodyparser');

const app = new koa();
app.use(bodyparser());

/***
app.use(ctx => {
    ctx.body = "Hello World!!!!";
});**/

//app.use(HomeRoutes.routes()) .use(HomeRoutes.allowedMethods());
app.use(HomeRoutes2.routes()) .use(HomeRoutes2.allowedMethods());
app.listen(3000);

console.log('Application is running on port 3000');

