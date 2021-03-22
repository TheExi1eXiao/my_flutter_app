import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'normalize.css'
import '@/style/index.less'
import 'amfe-flexible/index.js'
import '@/plugin'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
