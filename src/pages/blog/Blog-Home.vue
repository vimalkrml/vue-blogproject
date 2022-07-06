<template>
  <div class="container px-3 pt-8">
    <nav-bar></nav-bar>

    <!-- <button class="">CREATE BLOG</button>
    <div class="mb-10">
      <h2 class="text-center">BLOGS</h2>
    </div> -->

    <div class="container px-3 pt-1">
      <blog-items></blog-items>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>

<script>
import BlogItems from "../../components/BlogItems.vue";
import FooterBlog from "../../components/Footer-blog.vue";
import NavBar from "./Nav-bar.vue";
export default {
  components: {
    BlogItems,
    FooterBlog,
    NavBar,
  },
};
</script>
