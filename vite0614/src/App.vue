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
  <router-view v-slot="{ Component }">
  <transition>
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style>
  .v-enter-active{
    transition: all 0.7s 0.7s ease;
  }
  .v-leave-active {
    transition: all 0.7s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    /* transform: translateY(100px); */
  }
</style>
