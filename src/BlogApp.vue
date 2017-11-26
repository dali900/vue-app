<template>
  <div>
    <!-- <button v-on:click="showAllBlogs = !showAllBlogs">
      <span v-if="!showAllBlogs">Show All Blogs</span>
      <span v-else>Add Blog</span>
    </button>
    <add-blog v-if="!showAllBlogs"></add-blog>
    <show-blogs v-if="showAllBlogs"></show-blogs>
    <hr>
    <list-blogs v-if="showAllBlogs"></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './blog_components/addBlog';
import showBlogs from './blog_components/showBlogs';
import listBlogs from './blog_components/listBlogs';
import header from './blog_components/header';

export default {
  components:{
    "add-blog" : addBlog,
    "show-blogs":showBlogs,
    "list-blogs":listBlogs,
    "app-header":header
  },
  data () {
    return {
      showAllBlogs: false
    }
  },
  methods: {
    
  }

}

</script>

<style>
body{
  font-family: helvetica; 
}
</style>
