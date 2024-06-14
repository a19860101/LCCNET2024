<script>
  import Nav from './components/Nav.vue'
  import Header from './components/Header.vue'
  export default {
    components:{Nav,Header}
  }
</script>

<template>
  <Nav></Nav>
  <Header></Header>
  <router-view></router-view>
</template>

<style>

</style>
