import Vue from 'vue'
import App1 from './learn/App1.vue'
import MyAppTest from './learn/MyAppTest.vue'

import MyApp from './MyApp.vue'

Vue.component('peoples', MyAppTest); //Global component
export const bus = new Vue(); // Bus Events

new Vue({
  el: '#app',
  render: h => h(MyApp),
  methods: {
  	
  }
})
