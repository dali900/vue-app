<template>
    <div>
        <add-blog></add-blog>
    </div>
</template>

<script>
// Imports
import addBlog from './blog_comp/addBlog.vue';
export default {
    components: {
        'add-blog': addBlog
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