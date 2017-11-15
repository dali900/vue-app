<template>
 
      <header>
        <h1>{{title}}</h1>
      </header>
 
</template>

<script>
import {bus} from '../main';

export default {
  props: ["title"],
  data () {
    return {
      //title: "Vue Tutorial"
    }
  },
  // Hook
  created(){
    bus.$on('titleChanged', (data) => {
      this.title = data;
    });
  }

}
</script>

<style scoped> /*Css samo za ovu komponentu*/
  header{
    background: #B6FFCB;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>

