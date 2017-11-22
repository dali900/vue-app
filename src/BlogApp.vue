<template>
    <div>
        <add-blog></add-blog>
        <show-blogs></show-blogs>
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
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Arial';
}
</style>