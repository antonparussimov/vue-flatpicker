'use strict';

import Vue from 'vue';
Vue.config.productionTip = false;

window.$ = window.jQuery = require('jquery');
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  created(){
    console.log('Main app created');
  },
  mounted(){
    console.log('Main app mounted');
  },
});
