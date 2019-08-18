// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/font/font.css'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://47.102.124.250:1912'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
