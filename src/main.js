import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import Buefy from 'buefy'
import Pdf from 'vue-pdf'
import VueScrollactive from 'vue-scrollactive'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(Pdf)
Vue.use(VueScrollactive)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
