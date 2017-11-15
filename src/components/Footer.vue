<template>

      <footer>
        <p>{{copyright}}</p>
      </footer>

</template>

<script>

export default {

  data () {
    return {
      copyright: "Copyright 2017"
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

