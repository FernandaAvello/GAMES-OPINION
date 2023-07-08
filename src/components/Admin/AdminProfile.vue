<template lang="pug">
#AdminProfile
  v-row(style="height: 100vh;")
    v-col(cols="2")
      v-navigation-drawer.menu(color="primary" dark permament)
        v-list
          v-list-item.justify-center
            v-list-item-avatar
              v-img(src="@/assets/account.jpg")
          v-list-item(link)
            v-list-item-content
              v-list-item-subtitle ¡Bienvenid@!
              v-list-item-title {{ loginData.name }} {{ loginData.lastName }}
              v-list-item-subtitle {{ loginData.email }}
          v-list-item(v-for="item in items" :key="item.title" link)
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
        template(v-slot:append)
          .pa-2
            v-btn(block outlined @click="logout") Salir
    v-col(cols="10" id="AdminProfileSection")
      .d-flex.flex-column.align-center
        h2 Resumen de tu cuenta.
        h3.mt-3 Le diste me gusta al juego: "{{ game.name }}"
        p.mt-3 ¿Deseas comprar coins para este juego?
        v-btn.mt-2(color="accent" light @click="addCoins" :disabled="coins === 100") Agregar coins
        small.mt-1(v-if="this.coins === 100").red--text Llegaste al máximo de tu crédito.
        v-progress-linear.my-8(:color="getColorBar()" height="20" :value="coins" striped rounded)
          template(v-slot:default="{ value }")
            strong ${{ coins }}
      v-divider.my-10
      .d-flex.flex-column.align-center
        v-row
          v-col(cols="4")
            v-card.card-image(max-width="600")
              v-img.d-flex.align-start(height="350px" width="350px" src="@/assets/Gaming.svg")
                v-card-title
                  strong Finalización del juego: 17%
          v-col(cols="4")
            v-card.card-image(max-width="600")
              v-img.d-flex.align-start(height="350px" width="350px" src="@/assets/achievement.svg")
                v-card-title
                  strong Logros en el Juego: 166
          v-col(cols="4")
            v-card.card-image(max-width="600")
              v-img.d-flex.align-start(height="350px" width="350px" src="@/assets/Awards.svg")
                v-card-title
                  strong Recompensas: 200
</template>
<script>
export default {
  props: {
    loginData: {
      type: Object,
      default: null
    },
    game: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Admin', icon: 'mdi-gavel' }
      ],
      coins: 0,
      color: ''
    }
  },
  methods: {
    addCoins () {
      this.coins++
    },
    getColorBar () {
      if (this.coins < 50) {
        return 'green'
      }
      else if (this.coins >= 50 && this.coins < 80) {
        return 'yellow'
      }
      else {
        return 'red'
      }
    },
    logout () {
      this.$router.push({ name: 'home'})
    }
  }
}
</script>
<style lang="scss" scoped>
#AdminProfile {
  height: 100vh;
}
#AdminProfileSection {
  padding-top: 2%;
}
.v-progress-linear {
  width: 800px;
}
</style>