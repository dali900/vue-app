

<template>
	<div>
		<h2>OVO JE NEKI TEST 3</h2>
		<h3>PAGE: {{title}}</h3>
	</div>
</template>

<script>
import {bus} from '../main3';
export default {

  name: 'mein3Component',

  data () {
    return {
    	title: "MAIN 3"
    }
  },
  mounted(){
  	bus.$emit('page','MENI 3');
  	console.log('SALJE 3');
  }
}
</script>

<style lang="css" scoped>
</style>