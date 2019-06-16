- el:#root 根挂载结点，
- app component + vue-router + vuex 混合一起的应用
new Vue({
  el:'#app'
  render:h=>h(App)
})
- vue 的难点是 数据管理
  组件状态，data（）{},
  当两兄弟组件要共享状态时
  登录功能
  props 传递过去
  应用状态？

- 当页面上多个组件间要共享状态时，
  将共享状态，放置在这些组件共同的父组件的data来管理
  状态一定要唯一，放在一个地方（共同的父组件）方便管理 
  如果不统一，状态可能不同步 
  父子组件通信，v-on： increment = "incrementCount"
  props:this.$emit();
- 麻烦，找父节点有点麻烦， this.$emit()
  很多个状态要共享，很多组件，组件的关系也错综复杂，
  App 全局数据管理 vuex
