<template lang="pug">
#filterBar(container-fluid).d-flex.justify-space-around.align-center
  v-btn(plain small @click="getFilterGames('')") Todos los Juegos
  v-btn(plain small @click="getFilterGames('action')") Juegos de Acción
  v-btn(plain small @click="getFilterGames('adventure')") Juegos de Aventura
</template>
<script>
export default {
  methods: {
    getFilterGames (genre) {
      this.$emit('filter', { filter: genre })
    }
  }
}
</script>
<style lang="scss" scoped>
#filterBar {
  background-color: lightgray;
  height: 4rem;
  width: 100%;
}
</style>