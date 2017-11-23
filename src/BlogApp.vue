<template>
    <div>
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
</script>

<style>
body{
    margin: 0;
    font-family: 'Arial';
}
</style>