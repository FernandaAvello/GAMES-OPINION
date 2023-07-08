<template lang="pug">
#footer
  v-footer(dark padless)
    v-card.white--text.text-center(flat tile color="primary")
      v-card-text
        v-btn.mx-4.white--text(v-for="icon in icons" :key="icon.icon" icon target="_blank" :href="icon.link")
          v-icon(size="24px") {{ icon.icon }}
      v-divider
      v-card-text.white--text {{ new Date().getFullYear() }} — <strong>Desarrollado por M. Fernanda Avello</strong>
</template>
<script>
export default {
  data () {
    return {
      icons: [
        { icon: 'mdi-facebook', link: 'https://www.facebook.com' },
        { icon: 'mdi-twitter', link: 'https://www.twitter.com' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com' },
        { icon: 'mdi-instagram', link: 'https://www.instagram.com' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.v-card {
  width: 100%;
}
</style>