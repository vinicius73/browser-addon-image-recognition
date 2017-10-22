import Vue from 'vue';
import App from './App.vue';

require('./style.scss');

/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App),
});
