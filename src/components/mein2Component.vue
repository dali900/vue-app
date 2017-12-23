

<template>
	<div>
		<h2>OVO JE NEKI TEST</h2>
		<h3>PAGE: {{title}}</h3>
	</div>
</template>

<script>
import {bus} from '../main2';
export default {

  name: 'mein2Component',

  data () {
    return {
    	title: "MAIN 2"
    }
  },
  mounted(){
  	bus.$emit('page','MENI 2');
  	console.log('SALJE');
  }
}
</script>

<style lang="css" scoped>
</style>