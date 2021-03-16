//Importing of the koaRouter
const Router = require('@koa/router');

//Registering the routes & exporting
const router = new Router({
    prefix: '/home'
   });
   router.get('/', ctx => {
    ctx.body = 'Hello World';
   });
   router.post('/', ctx => {
    ctx.body = 'Hello World';
   });


module.exports = router;
   
