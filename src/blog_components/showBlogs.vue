<template>
  <!-- Custom direktiva theme-naizv, column-argument, narrow-value -->
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="Search blogs">
    <div class="single-blog" v-for="blog in filterBlogs">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {

  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    
  },
  computed: {
    /*filterBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }*/
    //Premesteno u mixins/searchMixin.js
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data);
        this.blogs = data.body.slice(0,10); //Skracujemo array na prvih 10 elemenata
    });
    //console.log(Math.random());
  },
  mixins: [searchMixin],
  //Filters locally
  filters: {
    toUppercase: function (value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return value.slice(0,100)+"...";
    }
  },
  directives:{
    'rainbow': {
       bind(el,binding,vnode){
        el.style.color = "#"+Math.random().toString().slice(4,10);
      }
    }
  }

}

</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
