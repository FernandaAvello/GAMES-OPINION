import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#004D40',
        accent: '#ffc100'
      }
    }
  },
  lang: {
    locales: { es },
    current: 'es',
  }
})
