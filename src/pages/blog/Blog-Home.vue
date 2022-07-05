<template>
  <div class="container px-5 mx-auto pt-3">
    <nav class="flex justify-between">
      <h1>MIMINMO</h1>
      <button>Create Blog</button>
    </nav>
    <router-link
      :to="{ name: 'ShowBlogs' }"
      class="cursor-pointer text-xs"
      tag="div"
      >Go to show page</router-link
    >
    <div class="mb-10">
      <h2 class="text-center">BLOGS</h2>
    </div>
    <div class="flex flex-wrap gap-5">
      <blog-items v-for="n in 10" :key="n"></blog-items>
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
