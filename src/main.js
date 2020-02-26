import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)

//Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
