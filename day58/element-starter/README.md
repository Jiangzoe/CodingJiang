### 大前端开发思路

- 在前端vue或者react下建一个添加server文件夹，用来做mvc，管理服务器

- 前后端分离   
  后端提供api， 在server目录下  
  前端在src目录下
1. 后端在3000端口，未来等着ngnix 将80 -> 3000  
/api API服务，等着前端调用 / vue 打包好的dist目录 index.html readfile 返回
2. 前端一般在8080 负责vue-router vuex axios
3. 前后端连调，api数据 -> vue组件的data
4. 跨域——前端面试最重要的问题  
domain 域名，
端口，cross domain   
前端不允许 安全问题  
前端考虑，页面上显示的要安全  
后端考虑  
- 前端  
subdomain:domain:port 都一样  
js同源机制，相同的源是值得依赖的  
前后端 8080：3000 跨域  
不跨。fetch('/api/user/login) 404  
3000 /api/ proxy 代理  
/api/ 匹配  
target：http://locahost:3000/api,
changeOrigin:true  
发出去的请求也不跨域