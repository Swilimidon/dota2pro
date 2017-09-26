// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'font-awesome/css/font-awesome.css'
import VueProgressiveImage from 'vue-progressive-image'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

Vue.use(VueProgressiveImage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
  }
})
