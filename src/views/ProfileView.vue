<template lang="pug">
#AdminView(container-fluid)
  AdminProfile(:loginData="loginData" :game="game")
</template>
<script>
import AdminProfile from '@/components/Admin/AdminProfile.vue'

export default {
  components: {
    AdminProfile
  },
  data () {
    return {
      loginData: {},
      game: {}
    }
  },
  mounted () {
    this.loginData = JSON.parse(localStorage.getItem('loginData'))
    this.game = JSON.parse(localStorage.getItem('game'))
  }
}
</script>