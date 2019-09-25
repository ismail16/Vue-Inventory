// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.config.productionTip = false

import { routes } from './router/index'

const router = new VueRouter({
	// mode: 'history',
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
