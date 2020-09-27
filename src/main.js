import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as components from './components'
import store from './store'

import "./assets/scss/app.scss"

Vue.config.productionTip = false

Object.keys(components.default).forEach(component => Vue.component(component, components.default[component]))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
