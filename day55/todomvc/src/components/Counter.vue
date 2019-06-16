<template>
  <div>
    Clicked:{{$store.state.count}} times,count is 
    <button @click="increment">+</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  // 自身的状态
  props:['count'],
  data(){
    return{
     
    }
  },
  methods:mapActions([
      'increment'
    ])
  }

</script>

<style>

</style>
