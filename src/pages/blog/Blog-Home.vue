<template>
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
