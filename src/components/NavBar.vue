<template lang="pug">
#navbar
  v-app-bar(elevation="2" dark color="primary")
    v-toolbar-title
      router-link.text-decoration-none(:to="{ name: 'home'}" style="color: white;") Gamer's Opinion
    v-spacer
    v-btn.mr-2.menu-option(plain @click="handlerFilter('187')") PS5
    v-divider(vertical inset)
    v-btn.mr-2.menu-option(plain @click="handlerFilter('3')") Xbox
    v-divider(vertical inset)
    v-btn.mr-2.menu-option(plain @click="handlerFilter('7')") Switch
    v-divider(vertical inset)
    v-btn.mr-2.menu-option(plain @click="handlerFilter('1')") PC
    v-divider(vertical inset)
    v-btn.mr-2.menu-option(plain @click="goTo404") Super Nintendo
    v-spacer
    v-btn(icon)
      v-icon mdi-magnify
    v-menu
      template(v-slot:activator="{ attrs, on }")
        v-btn.menu-mobile(icon v-bind="attrs" v-on="on")
          v-icon mdi-dots-vertical
      v-list
        v-list-item(v-for="(item, index) in items" :key="index" @click="() => {}")
          v-list-item-title {{ item.title }}
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      items: [
        { title: 'PS5' },
        { title: 'Xbox' },
        { title: 'Switch' },
        { title: 'PC' },
      ]
    }
  },
  methods: {
    ...mapActions('GamesStore', ['getByPlatform']),
    goTo404 () {
      this.$router.push({ path: '/404'})
    },
    handlerFilter (platform) {
      this.getByPlatform(platform)
    }
  }
}
</script>
<style lang="scss" scoped>
@media (max-width: 959px) {
  .menu-mobile {
    display: block;
  }
  .menu-option {
    display: none;
  }
}
@media (min-width: 960px) {
  .menu-mobile {
    display: none;
  }
}

</style>