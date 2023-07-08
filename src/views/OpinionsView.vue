<template lang="pug">
#OpinionsView(container-fluid)
  CommentForm(@saveData="saveData" :opinionData="opinionData")
  CommentList(:formData="formData" @editOpinion="editOpinion")
</template>
<script>
import CommentForm from '@/components/Opinions/CommentForm.vue'
import CommentList from '@/components/Opinions/CommentList.vue'

export default {
  components: {
    CommentForm,
    CommentList
  },
  data () {
    return {
      formData: {},
      opinionData: {}
    }
  },
  methods: {
    saveData (data) {
      this.formData = data
    },
    editOpinion (data) {
      this.opinionData = data
    }
  }
}
</script>