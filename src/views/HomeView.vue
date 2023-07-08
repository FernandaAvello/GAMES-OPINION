<template lang="pug">
#HomeView(container-fluid)
  FilterBar(@filter="handlerFilter")
  GameCard(:filter="filter")
</template>
<script>

import FilterBar from '@/components/Home/FilterBar.vue'
import GameCard from '@/components/Home/GameCard.vue'

export default {
  components: {
    FilterBar,
    GameCard
  },
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    handlerFilter (data) {
      this.filter = data.filter
    }
  }
}
</script>