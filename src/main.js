import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import vClickOutside from 'v-click-outside'
import VueScrollTo from 'vue-scrollto'
import Buefy from 'buefy'
import VueScrollactive from 'vue-scrollactive'
import VueFriendlyIframe from 'vue-friendly-iframe'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueScrollactive)
Vue.use(vClickOutside)
Vue.use(VueScrollTo)
Vue.use(VueFriendlyIframe)

Vue.mixin({
  methods: {
    genURL: (img) => {
      return 'url(' + require('./assets/images/' + img) + ')'
    },
    url: (img) => {
      return 'url(' + img + ')'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
