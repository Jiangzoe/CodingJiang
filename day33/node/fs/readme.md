### node 让js 来到了后端
服务器，linux 
- 文件系统操作  fs
- 连接数据库
- js没有DOM
- 文件读取 要花时间去文件定位（参数1），打开文件，再讲文件内容读到内存中，然后输出到命令行。文件越大，耗时越多。
- 要花时间 即js异步。
1. callback 回调函数
    ```
    fs.readFile(path,'utf8',function(err,data){

    })
    ```
2. promise 
    - 分开，Promise 是类 用于处理耗时异步问题的类，为了防止回调地狱，看到耗时问题就用出一个Promise实例
    - resolve 将控制权交给then  将结果通过resolve(data)
    - reject 如果失败，就让promise去执行catch(err){}