<template lang="pug">
#LoginModal
  v-dialog(v-model="dialog" persistent max-width="600px")
    v-card
      v-card-title
        h5 Para iniciar sesión, debes ingresar tus datos a continuación:
      v-card-text
        v-container
          v-form(@submit.prevent="submit")
            v-text-field(v-model="loginData.name" label="Tu Nombre*" required :rules="[rules.isRequired]" type="text" outlined dense)
            v-text-field(v-model="loginData.lastName" label="Tu Apellido*" required :rules="[rules.isRequired]" type="text" outlined dense)
            v-text-field(v-model="loginData.email" label="Tu Email*" required :rules="[rules.isRequired]" type="email" outlined dense)
            v-card-actions
              v-btn(color="primary" outlined @click="closeDialog") Cerrar
              v-spacer
              v-btn(color="primary" @click="goToProfile" type="submit" :disabled="checkFormValidations") Entrar
</template>
<script>
import { isRequired } from '@/utils/formValidation.js'

export default {
  data () {
    return {
      dialog: true,
      loginData: {
        name: '',
        lastName: '',
        email: ''
      },
      rules: {
        isRequired
      }
    }
  },
  methods: {
    closeDialog () {
      this.dialog = false
      this.$router.push({ name: 'home' })
    },
    goToProfile () {
      localStorage.setItem('loginData', JSON.stringify(this.loginData))
      this.dialog = false
      this.$router.push({ name: 'Profile' })
    },
    submit () {
      this.$emit('saveData', this.loginData)
      this.loginData = {
        name: '',
        lastName: '',
        email: ''
      }
    }
  },
  computed: {
    checkFormValidations () {
      return this.loginData.name === '' || this.loginData.lastName === '' || this.loginData.email === ''
    }
  }
}
</script>
<style lang="scss" scoped>
#LoginModal {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2% 8%;
}

</style>