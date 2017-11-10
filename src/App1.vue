<template>
  <div> <!-- Moze i bez id, onda se uzima prvi div -->
      <h2>{{title}}</h2>
      <p>{{greet('Dali')}}</p>
    
    <peoples></peoples>
    <people-local></people-local>
  </div>
</template>

<script>
//Loading local component
import MyLocal from './MyLocal.vue';

export default {
  // Register local component
  components: {
    'people-local': MyLocal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: "FIRST VUE FILE"
    }
  },
  methods: {
    greet: function (name) {
      return "Greet " + name;
    }
  }
}
</script>

<style>
  
</style>

