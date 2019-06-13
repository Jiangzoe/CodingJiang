<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>
export default {
  name:'demochild2',
  data(){
    return{
      message:'一般般吧'
    }
  },
  methods:{
    sendMsg(){
      this.$emit('fromChild',this.message)
    }
  }
  
}
</script>

<style>

</style>
