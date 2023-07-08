<template lang="pug">
#CommentList
  h2.mb-6 A continuación podrás ver las opiniones para este juego:
  p(v-if="opinions.length === 0") Actualmente no hay opiniones disponibles para este juego.
  v-expansion-panels
    v-expansion-panel(v-for="(opinion, index) in opinions")
      v-expansion-panel-header {{ `Comentario de: ${ opinion.name }` }}
      div.d-flex.justify-space-between
        v-expansion-panel-content "{{ opinion.opinion }}"
        v-expansion-panel-content
          v-tooltip(bottom)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on" @click="editOpinion(opinion, index)")
                v-icon(color="blue") mdi-pencil
            span Editar
          v-tooltip(bottom)
            template(v-slot:activator="{ on, attrs }")
              v-btn.ml-3(icon v-bind="attrs" v-on="on" @click="deleteOpinion(index)")
                v-icon(color="red") mdi-delete
            span Eliminar
</template>
<script>
export default {
  props: {
    formData: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    opinions: []
    }
  },
  methods: {
    deleteOpinion (index) {
      this.opinions.splice(index, 1)
      this.$toast.error('Su opinión ha sido eliminada.')
    },
    editOpinion (opinion, index) {
      this.$emit('editOpinion', {
        name: opinion.name,
        email: opinion.email,
        opinion: opinion.opinion,
        index: index
      })
    }
  },
  watch: {
    formData: {
      handler() {
        if (this.formData.index !== null) {
          this.opinions.splice(this.formData.index, 1, this.formData)
        } else {
          this.opinions.push(this.formData)
        }
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
#CommentList {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2% 8%;
}
</style>