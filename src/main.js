import Vue from 'vue'
import App from './App1.vue'
import MyApp from './MyApp.vue'

Vue.component('peoples', MyApp); //Global component

new Vue({
  el: '#app',
  render: h => h(App),
  methods: {
  	
  }
})
