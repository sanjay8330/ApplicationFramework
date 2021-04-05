const Router = require('@koa/router');

const {createPost,getPosts,getPostById,deletePost,updatePost} = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
   });
   /*router.get('/', ctx => {
    ctx.body = getPosts();
   });*/

   /*router.post('/', ctx => {
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
   });*/

    /*router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getPost(id);
   });*/

   router.get('/', async ctx => {
    ctx.body = getPosts();
   });

   router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = getPostById(id);
   });

   router.post('/', async ctx => {
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
   });

   router.delete('/', async ctx => {
    const id = ctx.params.id;
    post = await deletePost(id);
    ctx.response.status = 201;
    ctx.body = post;
   });

   router.put('/', async ctx => {
    let post = ctx.request.body;
    post = await updatePost(post);
    ctx.response.status = 201;
    ctx.body = post;
   });
   

   module.exports = router;
   