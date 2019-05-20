## webpack 代码生产工艺 工作流（work flow）
- html + css +js = development
- js        
    babel
    当你使用最新的技术来开发，babel 编译成es5       
    - babel-core 核心的转译库   
     npm run build 
    - babel-cli 
    - babel-preset-env  添加文件.babelrc
    ```
    {
        "preset" :["env"]
    }
    ```
- preset 预处理
env 搞不定的话可以安装插件 
- webpack 是一切工作流的主宰        
webpack --mode development      
/src 开发目录           
/dist 
- 开发时 development  代码的可读性 dev 本地 localhost
- 上线时 production 代码要压缩，混淆代码 build 服务器上 域名
- 测试 test 局域网