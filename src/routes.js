import BlogHome from "./pages/blog/Blog-Home.vue";
import Blogshow from "./pages/blog/Blog-show.vue";
import BlogCreate from './components/Blog-create.vue';

export default [
  {
    path: "/",
    name: "Home",
    component: BlogHome,
  },
  {
    path: "/show/:id",
    name: "ShowBlogs",
    component: Blogshow,
    props: true,
  },
  {
    path: "/create",
    name: "CreateBlog",
    component: BlogCreate,
  }
];
