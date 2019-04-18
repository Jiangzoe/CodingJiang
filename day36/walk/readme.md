- readdir

    读目录里内容 IO操作  异步操作

    readdirSync   
    - Async 异步
    - sync  同步

JS单线程的，用回调或promise，释放线程的控制权。主要因为js时前端DOM的编程，用户交互比较多，等到执行完后，再通过event-loop机制，拿回控制权（callback 或 resolve）。

来到了node，js获取了服务器端的能力。

readdirSync()       

