- MVVM 前端新贵     
Model 数据
    ```
    Page({
        data:{
            legends:[]
        }
    })   
    ```     
    View 视图       
    VM  {{}} wx:for ... 
- MVC 经典的Web开发模式     
Mode => SQL       
View =>静态页面       
Controller =>路由，   
- WebSever 软件程序      
Web服务器硬件运行WebServer程序      
ip http协议         
http://127.0.0.1:8080
8080为端口 不止一个服务     
eg:
    - 3306 ——MYSQL
    - 80   ——Web服务  
```      
http        
    .createServer(function(request,response){
        response.end('Hello World');
    })
    .listen(8080)
```

request  用户N       
Web Server一直在8080端口上伺服

request 就能找到店，每位用户到达，就会触发事件，调用creatServer 回调函数， request 得到用户身份，response 响应请求 http 响应之后就断开 ——response.end