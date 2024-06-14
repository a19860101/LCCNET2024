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
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateY(100px)
  }
</style>
