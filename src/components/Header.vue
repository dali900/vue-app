<template>
 
      <header>
        <h1>{{title}}</h1>
      </header>
 
</template>

<script>

export default {

  data () {
    return {
      title: "Vue Tutorial"
    }
  }

}
</script>

<style scoped> /*Css samo za ovu komponentu*/
  header{
    background: #B6FFCB;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>

