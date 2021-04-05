//Importing koa to the server.js file
const koa = require('koa');
require('./dal');

const koabodyparser = require('koa-bodyparser');
//Importing the routes from the hom.routes.js
const HomeRoutes = require('./routes/home.routes');

//Importing the routes from the post.routes.js
const HomeRoutesNew = require('./routes/post.routes');



//Creating koa web server that runs on all requests
const app = new koa();

//Registering the kao app and the body parser
app.use(koabodyparser());
app.use(HomeRoutesNew.routes())
 .use(HomeRoutesNew.allowedMethods());

// app.use(koabodyparser());
//app.use(HomeRoutes.routes())
 //.use(HomeRoutes.allowedMethods());

///app.use(ctx => {
 ///ctx.body = 'Hello World';
//});
app.listen(3000);
console.log('Application is running on port 3000');