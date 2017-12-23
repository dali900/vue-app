<template>
  <div>
    <p>{{page}}</p>
    <mein3Component></mein3Component>
  </div>
  
</template>

<script>
import mein3Component from './components/mein3Component.vue';
import {bus} from './main3';
export default {

  name: 'mein3Test',
  components:{
    'mein3Component':mein3Component
  },
  data () {
    return {
      page: "HOME 3"
    }
  },
  created(){
    // Slusamo na bus event 
    bus.$on('page', (data) => {
      this.page = data;
    });
  }
}
</script>

<style lang="css" scoped>
</style>