<template>
  <custom-container>
    <div class="header text-center">
      <h1 class="text-3xl font-bold text-gray-600">Loading</h1>
      <h2 class="text-xl font-bold text-gray-600 mb-5">Please wait.</h2>
    </div>
  </custom-container>
</template>

<script>
import CustomContainer from "./CustomContainer.vue";
export default {
  components: {
    CustomContainer,
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero > .header {
  padding: 20px;
  text-align: center;
}
.hero > .header > p {
  padding: 10px;
}
</style>