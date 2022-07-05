<template>
  <div class="pt-3">
    <nav class="flex justify-between">
      <h1>MIMINMO</h1>
      <button class="" >Create Blog</button>
    </nav>

    <div class="mb-10">
      <h2 class="text-center">BLOGS</h2>
    </div>
    <div class="container px-3">
      <blog-items></blog-items>
    </div>
    <footer-blog></footer-blog>
  </div>
</template>

<script>
import BlogItems from "../../components/BlogItems.vue";
import FooterBlog from "../../components/Footer-blog.vue";
export default {
  components: {
    BlogItems,
    FooterBlog,
  },
};
</script>
