## search suggest 
帮助用户快速找到它想找到的内容      
eg：输入Krystal会出现郑秀晶     
根据词匹配 分词         
没有必要每打一次keyup都去搜索，要防止多次，性能问题。       
打完一个单词再去搜索 Krystal            
定时器实现了防抖 debounce函数 利用闭包(返回新函数)，将定时器id，封闭在 闭包空间中，下一次的keyup事件会消除上一次的timeout，只有最后一个keyup间隔时间超过delay 得以执行。在频繁触发时，只执行一次。