// 缓存计算结果 不要重复计算，计算了的保存到哪里？ 方式？
let cache = {};   
// 1,2,3   4,5,6
// json 里面的key  类型是string <= argument 类型为类数组
function mult(){
    //参数数量是不定的
    let a = 1;
    let key = Array.prototype.join.call(arguments,',');
    // 与args相关，让数组=>string key
    //传进来[1,2,3] => "1,2,3"
    if(cache [key]){
        console.log('从缓存中取');
        return cache[key];
    }
    for(var i = 0,l = arguments.length;i<l;i++){
        a = a * arguments[i];
    }
    cache [key] = a;
    return a;
}
mult(1,2,3);
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));