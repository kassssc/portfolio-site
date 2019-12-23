import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from 'v-click-outside'

import './registerServiceWorker'

import Buefy from 'buefy'
import Pdf from 'vue-pdf'
import VueScrollactive from 'vue-scrollactive'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(Pdf)
Vue.use(VueScrollactive)
Vue.use(vClickOutside)

Vue.mixin({
	methods: {
		genURL: (img) => {
			return 'url(' + require('./assets/images/' + img) + ')'
		}
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
