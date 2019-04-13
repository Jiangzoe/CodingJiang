// fs模块 是node后端开发的一部分
const fs = require('fs');
//fs.readFile是一个api 会读取文件 读文件是异步的
// fs.readFile('./a.txt','utf8',function(err,data){
//     // console.log(data);
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     fs.readFile('./b.txt','utf8',function(err,data){
//         console.log('------------------',data);
//     })
// })
// 将callback 处理异步的方案抛弃，
const fileAPromise = new Promise((resolve,reject) => {
    // Promise封装一个异步任务
    fs.readFile('./a.txt','utf8',(err,data) => {
        // 流程的控权怎么移交
        resolve(data);
    })
})
const fileBPromise = new Promise((resolve,reject) => {
    fs.readFile('./b.txt','utf8',(err,data) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
    })
// .then() 将内部的耗时任务运行起来
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;
    })



    .then(data =>{
        console.log(data);
    })