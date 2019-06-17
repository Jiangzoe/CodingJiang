#### vue 开发 两部分
组件开发 vuex 数据管理 应用程序的数据流

store

new Vuex.Store({
  state
})

读写状态 组件 地方  
读 this.$store.state.data  
写 actiongs, mutations, getters

vuex 不是什么时候都需要,小项目不需要，大项目离不开
公司的概念  
CEO  State 100w  
财务 mutations 审核对状态的修改是否被允许

- Vue 实现核心的MVVM, 通过Vue.use() 插入进去
  this.$store
  this.$router

写  

- data() 将会被state 取代  
data只是自身状态的数据
methods 改变状态的方法，会是actions
