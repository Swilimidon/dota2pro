// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import Buefy from 'buefy'
import VueProgressiveImage from 'vue-progressive-image'
import router from './router'
import store from './vuex/store'
import 'buefy/lib/buefy.css'
import 'font-awesome/css/font-awesome.css'
import './assets/main.css'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.use(VueProgressiveImage, { delay: 1000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  methods: {
  }
})
