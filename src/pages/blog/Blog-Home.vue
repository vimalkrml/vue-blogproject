<template>
  <!-- <button class="">CREATE BLOG</button>
    <div class="mb-10">
      <h2 class="text-center">BLOGS</h2>
    </div> -->
  <custom-container>
    <blog-items></blog-items>
  </custom-container>
</template>

<script>
import BlogItems from "../../components/BlogItems.vue";
import CustomContainer from "../../components/CustomContainer.vue";

export default {
  components: {
    BlogItems,
    CustomContainer,
  },
};
</script>
