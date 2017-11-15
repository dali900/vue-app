<template>
 
 <div id="persons">
   <ul>
     <li v-for="person in persons" v-on:click="person.show = !person.show">
       <h2>{{person.name}}</h2>
       <h3 v-show="person.show">{{person.email}}</h3>
     </li>
   </ul>

   <form-helper>
      <div slot="form-header">
          <h3>This is the title of a form</h3>
          <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
          <input type="text" placeholder="name" required />
          <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
      </div>
  </form-helper>
 </div>
 
</template>

<script>
import formHelper from './formHelper.vue'

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
        'form-helper': formHelper
    },
  data () {
    return {
      
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

