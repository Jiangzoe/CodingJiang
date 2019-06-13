<template>
  <div class="container">
    <child @fromChild='getChild'></child>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import child from './child';
export default {
  name:'demoChild2',
  data(){
    return{
      msg:'ddds'
    }
  },
  methods:{
    getChild(data){
      console.log(data)
      this.msg = data
    }
  },
   components:{
        child
      }
}
</script>

<style>

</style>
