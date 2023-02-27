import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/common.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

console.log('main')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
