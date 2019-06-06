## why

无状态

## cookie

本地存储
怎么来：
1. js document.cookie 可读 可写
2. 服务端 通过Set-Cookie 响应头设置 cookie


内容：
name:
value:
path: cookie 在哪个路径下生效

/   生效范围为所有路径  
/user  /user user 以及user下面的  
/user/abc  

domain: 

httpOnly：有true和false之分，如果设置为 true， 就不能js获取到cookie，设置为false才行。    
maxAge：在几秒后 cookie被删除。  
secure：安全 指挥在 https 协议下传输  
koa：ms js：s

作用范围：  
domain + path  
在什么域名什么路径下面生效    
浏览器检查存储的cookie，会发送给服务端。  
而且：http 传输报文的大小  
放在cookie 请求头里面发送

用途：  
状态管理 true ，用户个性化设置 false。规定死的

## session
会话  
靠后台语言自己实现的  
很多个用户产生很多个session

userId
sessionId 用户会话时，可以通过自己的 sessionId 查询自己的状态  
cookie：sessionId=id