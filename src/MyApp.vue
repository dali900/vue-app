<template>
  <div> 
    <app-header v-bind:title="title"></app-header>
    <app-main v-bind:persons="persons"></app-main><!--  Slanje podataka u Main.vue -->
    <app-footer v-bind:title="title" v-on:changeTitleEvent="udpateTitle($event)"></app-footer><!--  Testing emits -->
  </div>
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

export default {
  components: {
    "app-header" : Header,
    "app-main" : Main,
    "app-footer" : Footer
  },
  data () {
    return {
      persons: [
      {name: 'Prof. Branson Swaniawski DVM', email: 'labadie.tina@yahoo.com', show: false}, 
      {name: 'Trenton Kuhn', email: 'lloyd04@murray.com', show: false}, 
      {name: 'Lew Hoppe', email: 'augusta.beer@yahoo.com', show: false}, 
      {name: 'Brycen Senger', email: 'gkoepp@mclaughlin.com', show: false}, 
      {name: 'Prof. Jamey Hintz', email: 'zulauf.zane@langosh.com', show: false}, 
      {name: 'Sabryna Kshlerin', email: 'dolly.runolfsdottir@rice.com', show: false}, 
      {name: 'Mariano Marquardt', email: 'jean17@padberg.com', show: false}, 
      {name: 'Claudie Reinger', email: 'njacobson@gmail.com', show: false}, 
      {name: 'Prof. Tracey Carroll I', email: 'alycia.russel@hotmail.com', show: false}
      ],
      title: "Vue app tut"
    } 
  },
  methods: {
    udpateTitle: function (param) {
      this.title = param;
    }
  }

}
</script>

<style scoped> /*Css samo za ovu komponentu*/

</style>

