const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
  const start = Date.now();
  await next();
  ctx.body = ` hello koa `;
  const end = Date.now();

  // writeHead() 设置响应头 content-type.
  // X-Response-time 自定义响应头 
  ctx.set('X-Response-time',`${end - start}ms`);
  console.log('spend',`${end - start}ms`)
})
app.use(async (ctx) =>{
  ctx.body = ` hello koa `;
})

app.listen(8080, () => {
  console.log('server is running 8080')
})