<template lang="pug">
#GamerLayout
  v-row.mt-4
    v-col(md="4" sm="6" xs="1" v-for="(game, index) in games" :key="index")
      v-card
        v-img(height="250" :src="game.background_image")
        v-card-title {{ game.name }}
        v-divider
        v-rating.pl-3.pt-2(:value="game.rating" empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full" color="amber" dense half-increments readonly size="20")
        v-card-text.py-1 #[strong Fecha de lanzamiento:] {{ getFormatedDate(game.released) }}
        v-card-text.py-1 #[strong Fecha de actualización:] {{ formatDate(game.updated) }}.
        v-card-text.py-1 #[strong Géneros:]
          span(v-for="(genre, index) in game.genres" index="" :key="genre.id")
            v-chip.ml-1(v-if="index < 3" pills :color="colorGenres[genre.name]" outlined small) {{ genre.name }}
        v-card-actions.justify-space-between.py-5
          v-btn.none-text-decoration.ml-2(color="primary" @click="goToOpinions(game.name)") Opinar
          div
            v-btn(icon color="green" @click="goToAdmin(game)" )
              v-icon mdi-thumb-up
            v-btn(icon color="red")
              v-icon mdi-thumb-down
  v-pagination.my-10(v-model="page" :length="pageCount" circle prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right")
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    filter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      games: [],
      page: 1,
      pageCount: 0,
      colorGenres: {
        Action: 'red',
        Adventure: 'green',
        RPG: 'purple',
        Shooter: 'blue',
        Puzzle: 'orange',
        'Massively Multiplayer': 'brown',
        Platformer: 'black',
        Indie: 'pink'

      }
    }
  },
  methods: {
    ...mapActions('GamesStore', ['getGames']),
    async fetchData (genre = '', platform = '') {
      let params = {
        page: this.page
      }
      if (genre !== '') params.genres = genre
      if (platform !== '') params.platforms = platform
      await this.getGames(params).then(
        response => {
          if (response.status === 200) {
            this.games = response.data.results
            this.pageCount = Math.ceil(200 / 20)
          }
        }
      )
    },
    getFormatedDate(date) {
      return date.split('-').reverse().join('-')
    },
    goToOpinions (name) {
      this.$router.push({ name: 'Opinions', params: { gameName: name }})
    },
    goToAdmin (game) {
      localStorage.setItem('game', JSON.stringify(game))
      this.$router.push({ name: 'Administrator' })
    },
    formatDate (date) {
      return new Intl.DateTimeFormat('cl-ES', { dateStyle: 'long' }).format(new Date(date))
    }
  },
  computed: {
    ...mapGetters('GamesStore', ['platform'])
  },
  created () {
    this.fetchData()
  },
  watch : {
    page () {
      this.fetchData()
    },
    filter (newVal) {
      this.fetchData(newVal, '')
    },
    platform (newVal) {
      this.fetchData('', newVal)
    }
  }
}
</script>
<style lang="scss" scoped>
#GamerLayout {
  padding: 0 8%;
}
</style>