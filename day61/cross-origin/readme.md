# 跨域问题

浏览器的安全策略  

当我们的**协议 端口 域名** 有一个不一致时，就存在跨域

http://www/abc.com/a http://www/abc.com

# 跨域解决方式

## cors

cors（Cross Origin Resouce Share）跨域资源共享

1. 它是一个标准，规定了一些http的首部字段，让服务器允许哪些网站可以访问
2. 规定 如果是*非简单请求*，浏览器会先发一个预检请求。从服务端知道是否允许跨域，如果允许，才会发出正式请求
3. [非简单请求与简单请求](https://github.com/amandakelake/blog/issues/62)

## jsnop

1. `<script>` 标签 可以跨域

2. 加载进来的内容会被当做js执行

3. 后端先获取到前端发出的 callback 在callback里插入自己想要返回的内容

4. 前端拿到返回的内容当作js执行

   ```js
   getUser({
   name:'abc',
   age:18
   })
   ```

5. 预先定义好一个函数

6. 缺点：只能 get请求

7. 写一个promise 风格的jsonp

   ```js
   jsonp(url,param={})
   .then(res => {
   console.log(res)
   })
   ```

   思路：

   - 一个全局的方法
   - 插入一个`<scrpit>`标签，根据方法名param 拼接url
   - 根据js的加载情况 判断请求成功与否 返回数据
   - `<scrpit>`标签上面 有事件