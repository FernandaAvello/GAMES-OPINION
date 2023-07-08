<template lang="pug">
#AdminView(container-fluid)
  LoginModal(@saveData="saveData")
</template>
<script>
import LoginModal from '@/components/Admin/LoginModal.vue'

export default {
  components: {
    LoginModal
  },
  data () {
    return {
      loginData: {}
    }
  },
  methods: {
    saveData (data) {
      this.loginData = data
    }
  }
}
</script>
<style lang="scss" scoped>
#AdminView {
  height: 100vh;
}
</style>