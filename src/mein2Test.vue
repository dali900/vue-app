<template>
	<div>
		<p>{{page}}</p>
		<mein2Component></mein2Component>
	</div>
	
</template>

<script>
import mein2Component from './components/mein2Component.vue';
import {bus} from './main2';
export default {

  name: 'mein2Test',
  components:{
  	'mein2Component':mein2Component
  },
  data () {
    return {
    	page: "HOME 2"
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