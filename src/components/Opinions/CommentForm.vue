<template lang="pug">
#CommentForm
  h2 Nos encantaría saber tu opinión sobre el juego: "{{ gameName }}"
  .form
    v-form(@submit.prevent="submit")
      v-text-field(v-model="formData.name" label="Tu Nombre" outlined type="text" prepend-inner-icon="mdi-account" required :rules="[rules.isRequired]")
      v-text-field(v-model="formData.email" label="Tu Email" outlined type="email" prepend-inner-icon="mdi-email" required :rules="[rules.isRequired]")
      v-textarea(v-model="formData.opinion" label="Tu Opinión" outlined type="text" clearable clear-icon="mdi-close-circle" counter prepend-inner-icon="mdi-comment" required :rules="[rules.textarea, rules.isRequired]")
      v-btn.mt-2(type="submit" color="primary" :disabled="checkFormValidations") {{ formData.index === null ? 'Enviar' : 'Actualizar' }}
</template>
<script>
import { isRequired } from '@/utils/formValidation.js'
export default {
  props: {
    opinionData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      gameName: this.$route.params.gameName,
      rules: {
        textarea: v => v.length <= 200 || 'Máximo 200 caracteres',
        isRequired
      },
      formData: {
        name: '',
        email: '',
        opinion: '',
        index: null
      }
    }
  },
  methods: {
    submit () {
      this.$emit('saveData', this.formData)
      this.formData = {
        name: '',
        email: '',
        opinion: '',
        index: null
      }
      this.$toast.success('Su opinión ha sido guardada con éxito.')
    }
  },
  computed: {
    checkFormValidations () {
      return this.formData.name === '' || this.formData.email === '' || this.formData.opinion === ''
    }
  },
  watch: {
    opinionData: {
      handler() {
        this.formData.name = this.opinionData.name
        this.formData.email = this.opinionData.email
        this.formData.opinion = this.opinionData.opinion
        this.formData.index = this.opinionData.index
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
#CommentForm {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2% 8%;
  .form {
    padding: 4% 0;
    width: 50%;
  }
}

</style>