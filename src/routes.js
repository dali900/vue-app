import showBlogs from './blog_components/showBlogs'
import addBlog from './blog_components/addBlog'
import listBlogs from './blog_components/listBlogs'
import MyApp from './MyApp';

export default [
	{ path: "/", component: showBlogs},
	{ path: "/add", component: addBlog},
	{ path: "/list", component: listBlogs},
	{ path: "/myapp", component: MyApp}
]