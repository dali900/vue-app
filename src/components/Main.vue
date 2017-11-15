<template>
 
 <div id="persons">
   <ul>
     <li v-for="person in persons" v-on:click="person.show = !person.show">
       <h2>{{person.name}}</h2>
       <h3 v-show="person.show">{{person.email}}</h3>
     </li>
   </ul>
 </div>
 
</template>

<script>

export default {
  props: ["persons"], //Prihvatanje podataka iz root komponete MyApp, normalan access za methods
  // Sa validacijom
  /*props: {
    persons: {
      type: Array,
      required: true
    }
  },*/
  data () {
    return {
      
    }
  }

}
</script>

<style scoped> /*Css samo za ovu komponentu*/
 #persons{
  margin: 30px auto;
  padding: 0 20px;
  box-sizing: border-box;
 }
 ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
 }
 li{
  flex-wrap: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
 }
 h3{

 }
</style>

