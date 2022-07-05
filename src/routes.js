import BlogHome from "./pages/blog/Blog-Home.vue";
import Blogshow from "./pages/blog/Blog-show.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: BlogHome,
  },
  {
    path: "/show",
    name: "ShowBlogs",
    component: Blogshow,
  },
];
