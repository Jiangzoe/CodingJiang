## 5.15 大数据添加  big_data/    

- 内存开销最大在动态DOM  DOM开销是最耗内存的  createElement

-  cloneNode 节点克隆

  ```javascript
  container = document.querySelector('.news')
      let ele = document.createElement('div')
      for(let item of originNews){
        let otherEle = ele.cloneNode(true)
        otherEle.innerHTML = item.content;
        container.appendChild(otherEle);
      }
  ```

- innerHTML     10000条DOM显示是负担
-  绘制html  重绘和重排  导致网页卡顿
- （延迟加载一般用于图片）分屏加载HTML 
  - 页面防抖？
  - 数据分页
    - page，上一页的数据，当前页的数据，下一页的数据 =>前端自主分页    
    - 防抖 + onscroll     跟onReachBottom 一样，当前数据是否超出了视窗
