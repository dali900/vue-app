import Vue from 'vue'
import App1 from './learn/App1.vue'
import MyAppTest from './learn/MyAppTest.vue'

import MyApp from './MyApp.vue'
import BlogApp from './BlogApp.vue'
import VueResource from 'vue-resource'
//------------------------------------------
Vue.component('peoples', MyAppTest); //Global component
export const bus = new Vue(); // Bus Events (header.vue)

new Vue({
  el: '#app',
  render: h => h(MyApp),
  methods: {
  	
  }
})

//---------------------------------------
Vue.use(VueResource);

new Vue({
  el: '#blog_app',
  render: h => h(BlogApp),
  methods: {
  	
  }
})
