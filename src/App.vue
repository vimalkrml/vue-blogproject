<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-blog></footer-blog>
  </div>
</template>

<script>
import NavBar from "./pages/blog/Blog-post.vue";
import FooterBlog from "./components/Footer-blog.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBlog,
  },
};
</script>
