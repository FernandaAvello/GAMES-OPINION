<template lang="pug">
v-app
  NavBar(v-if="$route.name !== 'Profile' && $route.path !== '/404'")
  v-main
    router-view
  FooterBar(v-if="$route.name !== 'Profile' && $route.path !== '/404'")
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  components: {
    NavBar,
    FooterBar
  }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
.app {
  display: flexbox;
  height: 100%;
  width: 100vw;
}
.main-content {
  margin-top: 68px;
}
</style>

