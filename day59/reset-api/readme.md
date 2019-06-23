# fullstack 全栈
## restful api  
浏览器与服务器通信方式的一种设计风格
- restful 的世界里，一切皆资源
- url 来唯一定位资源的识别图  
/post/:id/comments
- 添加一条comment
  ```
  {
    id:2,
    body:'好巧，你那边也在下雨',
    postId:1
  }
  ```
- 设计有意义的URL  
资源 状态改变  
修改内容  
PUT /comments/2 body:'...'  
操作——SQL方法——HTTP动词  
CREATE——INSERT——POST  
READ——SELECT——GET  
UPDATE——UPDATE——PUT/PATCH（PUT:要给完整的数据/PATCH:只要给一部分）  
DELETE——DELETE ——DELETE 
状态切换，使用定义的谓语动词  
