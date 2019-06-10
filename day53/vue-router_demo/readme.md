- 理论支持  
 SPA (Single Pages Application)  
 导航(nav)不动，footer也不动，中间body(main.content)是切换的，页面不需要刷新  
- jquery on 事件api  
```
 $(document).on('event_type','child_node',fn)
```
- 没有前端路由(组件)，少了体验，但是可以通过 后端路由（restful，mvc router）（构建网站资源路由）
- 前端路由 两种做法  
   1. history pushState api      
   state存放的是这次跳转url对应的状态数据    
   title    
   url： 一个url 一个状态
   2. hashchange 