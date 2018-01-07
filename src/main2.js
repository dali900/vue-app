import Vue from 'vue'
import mein2Test from './mein2Test.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(mein2Test),
  methods: {
  	
  }
})