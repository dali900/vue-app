<template>

      <footer v-on:click="changeTitle()">
        <p > {{copyright}} </p> <!-- Ovde nece izvrsiti promenu changeTitleEvent nad title zato sto je referenca -->
      </footer>

</template>

<script>

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
      this.$emit('changeTitleEvent', 'VUE TUT');
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

