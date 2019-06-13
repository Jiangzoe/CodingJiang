import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import father from '@/components/view/demo1/father'
import father2 from '@/components/view/demo2/father'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/f1',
      name:'father',
      component:father
    },
    {
      path:'/f2',
      name:'faher2',
      component:father2
    }
  ]
})
