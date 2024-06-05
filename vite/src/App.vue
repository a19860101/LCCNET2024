
<script>
  export default {
    data(){
      return {
        title: 'Hello Vue 123'
      }
    },
    methods:{
      test(){
        alert('hello methods');
      }
    }
  }
</script>

<template>
  <h1>{{ title }}</h1>
  <a href="#" @click="test()">click</a>
</template>


<style>
  h1 {
    color: #f00;
  }
</style>