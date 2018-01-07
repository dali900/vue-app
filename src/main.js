import Vue from 'vue'
import App1 from './learn/App1.vue'
import MyAppTest from './learn/MyAppTest.vue'

import MyApp from './MyApp.vue'
import BlogApp from './BlogApp.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
//------------------------------------------
//Http requests
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('peoples', MyAppTest); //Global component
export const bus = new Vue(); // Bus Events (header.vue)

const router = new VueRouter({
  routes: Routes
});



//---------------------------------------


//Custom directives globally
/*Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#"+Math.random().toString().slice(4,10);
  }
});*/
Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value =='narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

//Custom filters globally
/*Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});
Vue.filter('snippet',function(value){
  return value.slice(0,100)+"...";
});*/

new Vue({
  el: '#app',
  render: h => h(MyApp),
  methods: {
    
  },
});

new Vue({
  el: '#blog_app',
  render: h => h(BlogApp),
  methods: {
  	
  },
  router: router //Nasa kreirana konstanta router
})
