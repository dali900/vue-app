<template>
  <div>
    <h3>Global component</h3>
    <ul>
      <li v-for="p in peoples">{{p}}</li>
    </ul>
  </div>
</template>

<script>
export default {

  data () {
    return {
      peoples: ["Dalibor","Mario","Nemanja"]
    } 
  }

}
</script>

