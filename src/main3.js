import Vue from 'vue'
import mein3Test from './mein3Test.vue'

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(mein3Test),
  methods: {
  	
  }
})