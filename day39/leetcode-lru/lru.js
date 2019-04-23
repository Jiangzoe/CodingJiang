// 不用每次都去硬盘里查找 在内存中缓存
var LRUCache = function(capacity){
    this.capacity = capacity;
    this.obj = {};    //key
    this.arr = [];
}

LRUCache.prototype.get = function(key){
    var val = this.obj[key];
    // 容量不大的内存服务于最多的进程
    // 如果有  且为正值 就返回值
    if(val>0){
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }else{
        return -1;
    }
    // 没有 就返回-1
}
LRUCache.prototype.set = function(key,value){
    if(this.obj[key]){
        this.obj[key]=value;   //更新
        // 最近使用 数组的[0]
        // 如何把之前的删除？
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }
    //如果有key，就返回.
    //没有
    if(this.capacity === this.arr.length){
        //放满了
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key);
    //没有的话有两种可能 
    // 如果内存满了，执行arr.pop()

    //存进去 arr
}