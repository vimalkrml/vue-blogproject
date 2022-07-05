<template>
  <div class="container px-5 mx-auto pt-3">
    <nav class="flex justify-between">
      <h1>MIMINMO</h1>
      <button>Create Blog</button>
    </nav>

    <div class="mb-10">
      <h2 class="text-center">BLOGS</h2>
    </div>
    <div class="">
      <blog-items></blog-items>
    </div>
  </div>
</template>

<script>
import BlogItems from "../../components/BlogItems.vue";
export default {
  components: {
    BlogItems,
  },
};
</script>
