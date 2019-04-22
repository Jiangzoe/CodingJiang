// 对象 gaodeMap
const googleMap = {
    show(){
        console.log('开始渲染GOOGLE地图');
    }
}
const baiduMap = {
    show(){}
}
// renderMap 负责调用
const renderMap = () =>{
    googleMap.show();
}

renderMap();