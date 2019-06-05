/**
 * 管理router
 */
const user = {
  name: 'Jiang',
  posts: [{
      id: 0,
      title: '小程序踩坑指南'
    },
    {
      id: 1,
      title: '小程序踩坑指北'
    }
  ]
}
const postsDetail = [{
  id: 0,
  content: 'wechat app'
}, {
  id: 1,
  content: '<strong>wechat component</strong>'
}]


const Router = require('koa-router');
const router = new Router();
router.get('/user', async (ctx) => {
  await ctx.render('user', { user });
})
router.get('/posts', async (ctx) => {
  const { id } = ctx.query;
  const post = postsDetail.find(postItem => postItem.id == id);
  await ctx.render('post', { post });
})
// 浏览器地址栏 method = 'get'
router.get('/create',async (ctx) => {
  await ctx.render('create');
})
//submit method='post'
router.post('/create',async (ctx) => {
  console.log(ctx.request.body);
  const {title,content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postsDetail.push({
    id,
    content
  })
  ctx.redirect('/user');
})

module.exports = router;