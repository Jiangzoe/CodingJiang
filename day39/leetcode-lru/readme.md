# LRU  缓存
Least Recently Used     
操作系统

node fs 硬盘 ，内存     
内存精贵        
硬盘用不完      

内存 是代码的运行空间 但是空间是有限的      
假设内存空间为2 往里面存放变量 2个      
当第三个来了怎么办？
- 1  put(1)
- 2  put(2)
- 3  放不下了  1 2      

[ ] 内存 length 2        
原则：最近最少使用原则
- 1 put(1)
- 2 put(2)
- 3 get(1) 返回1 1最近使用了，2最近最少使用
- 4 put(3,3) 3进去了，2就要丢掉
- 5 get(2) 拿不到 
- 6 put(4,4)  4 3    1丢了
- 7 get(1) 拿不到  返回-1
- 8 get(3) 返回 3
- 9 get(4) 返回 4       

1. cache LRUCache 
get     
set

2. 对象字面量有利于get set方法的实现

3. 最近最少使用         
Json搞不定      
数组可以 [0] [length -1]        
在一头进行操作    
一半的工作交给数组，一半的工作交给对象字面量        
让它们成为LRUCache的两个属性

- get set arr + obj 组织在LRUCache      
        indexOf pop unshift splice