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


/*    <div>
        <button v-on:click="changeView(component)">{{btnMsg}}
        </button>
        <component v-bind:is="component"></component>
        <!-- <add-blog></add-blog>
        <show-blogs></show-blogs> -->
    </div>
</template>

<script>
// Imports
import addBlog from './blog_comp/addBlog.vue';
import showBlogs from './blog_comp/showBlogs.vue';
export default {
    components: {
        'add-blog': addBlog,
        'show-blogs': showBlogs
    },
    data () {
        return {
            btnMsg: "Show all blogs",
            component: "add-blog"
        }
    },
    methods: {
        changeView: function (arg) {
            if(arg == 'add-blog'){
                this.component = 'show-blogs';
                this.btnMsg = "Add Blog";
            } else {this.component = 'add-blog'; this.btnMsg = "Show all blogs"; }      
        }
    }
}
*/
</script>

<style>
body{

  font-family: helvetica; 
}
</style>

    margin: 0;
    font-family: 'Arial';
}
</style>

