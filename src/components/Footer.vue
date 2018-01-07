<template>

      <footer v-on:click="changeTitle()">
        <p > {{copyright}} </p> <!-- Ovde nece izvrsiti promenu changeTitleEvent nad title zato sto je referenca -->
      </footer>

</template>

<script>
import {bus} from '../main';

export default {

  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      copyright: "Copyright 2017 "+ this.title
    }
  },
  methods: {
    changeTitle: function () {
      //Emituje event direkno u parent component (MyApp) u tag v-on:changeTitle
      //this.$emit('changeTitleEvent', 'VUE TUT'); 
      bus.$emit('titleChanged','VUE TUT'); //Saljemo Bus event, ucitava se u headr.vue
      console.log('RADI');
    }

  }

}
</script>

<style scoped> /*Css samo za ovu komponentu*/
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: #B6FFCB;
    text-align: center;
  }
</style>

