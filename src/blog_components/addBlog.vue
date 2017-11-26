<template>
  <div id="add-blog">
    <h2>Add new blog post !</h2>
    <form v-if="!submitted">
    	<label>Blog Title:</label>
    	<input type="text" name="" v-model.lazy="blog.title">
    	<label>Blog Content:</label>
    	<textarea v-model.lazy="blog.content"></textarea>
    	<!-- Cuvanje izabranih podataka u nizu -->
    	<div id="checkboxes">
    		<label>Cat 1
    			<input type="checkbox" value="Cat 1" v-model="blog.categories">
    		</label>
    		<label>Cat 2
    			<input type="checkbox" value="Cat 2" v-model="blog.categories">
    		</label>
    		<label>Cat 3
    			<input type="checkbox" value="Cat 3" v-model="blog.categories">
    		</label>
    	</div>
    	<label>Author: </label>
    	<select v-model="blog.author">
    		<option :value="author" v-for="author in authors">{{author}}</option>
    	</select>
    	<button v-on:click.prevent="post">Add Blog</button>
    </form>

    <div v-if="submitted" id="msg">
    	<div v-on:click="submitted=!submitted">X</div><h3>Bolg submited!</h3>
    </div>

    <div id="preview">
    	<h3>Preview blog</h3>
    	<p>Blog title: {{blog.title}}</p>
    	<p>Blog content: </p>
    	<p>{{blog.content}}</p>
    	<p>Blog categories: </p>
    	<ul>
    		<li v-for="cat in blog.categories">{{cat}}</li>
    	</ul>
    	<p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      blog: {
      	title: "",
      	content: "",
      	categories: [],
      	author: ""
      },
      authors:["The Net Ninja", "Vue", "Webpack", "JavaScript"],
      submitted: false
    }
  },
  methods: {
    post: function(){
    	this.$http.post('https://jsonplaceholder.typicode.com/posts', {
    		title: this.blog.title,
    		body: this.blog.content,
    		userid: 0
    	}).then( (data) => {
    		console.log(data);
    		this.submitted = true;
    	});
    }
  }

}

</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    background-color: #E7E7E7;
}
h3{
    margin-top: 10px;
}
#checkboxes label {
	display: inline-block;
}
#msg{
	width: auto;
	border: 1px solid #00BA30;
	background-color: #B8FFC4;
	color: #59A56E;
	padding: 5px;
}
#msg div{
	float: right;
	cursor: pointer;
}
</style>
