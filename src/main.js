import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

import '@/scss/bootstrap.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
