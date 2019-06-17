<template>
  <div id="app">
    clicked {{ $store.state.count}} times,count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
// 借
import  { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  methods:mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  computed: 
    // 如果有多次要用到奇偶判断时，用getter
    mapGetters([
      'evenOrOdd'
    ])
    // evenOrOdd(){
    //   return this.$store.state.count %2 ===0 ? 'even' : 'odd'
    // }
  
}
</script>

<style>

</style>
