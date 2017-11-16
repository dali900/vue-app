<template>
 
 <div id="persons">
   <ul>
     <li v-for="person in persons" v-on:click="person.show = !person.show">
       <h2>{{person.name}}</h2>
       <h3 v-show="person.show">{{person.email}}</h3>
     </li>
   </ul>

    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>

 </div>
 
</template>

<script>
import formHelper from './formHelper.vue';
import formOne from './formOne.vue';
import formTwo from './formTwo.vue';

export default {
  props: ["persons"], //Prihvatanje podataka iz root komponete MyApp, normalan access za methods
  // Sa validacijom
  /*props: {
    persons: {
      type: Array,
      required: true
    }
  },*/
  components: {
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      component: 'form-one'
    }
  },
  methods: {
      handleSubmit: function(){
          alert('thanks for submitting');
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

