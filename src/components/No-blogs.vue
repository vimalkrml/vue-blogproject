<template>
  <custom-container>
    <div class="header text-center mb-96 mt-20">
      <h1 class="text-3xl font-secondary font-bold text-gray-600">Loading</h1>
      <h2 class="text-xl font-secondary font-bold text-gray-600 mb-5">
        Please wait.
      </h2>
      <div class="flex justify-center gap-2">
        <div
          class="
            bg-gray-600
            p-1
            w-2
            h-5
            rounded-full
            animate-bounce
            blue-circle
          "
        ></div>
        <div
          class="bg-black p-1 w-2 h-3 rounded-full animate-bounce green-circle"
        ></div>
        <div
          class="bg-gray-600 p-1 w-2 h-5 rounded-full animate-bounce red-circle"
        ></div>
        <div
          class="bg-black p-1 w-2 h-3 rounded-full animate-bounce green-circle"
        ></div>
        <div
          class="bg-gray-600 p-1 w-2 h-5 rounded-full animate-bounce red-circle"
        ></div>
      </div>
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
.blue-circle {
  animation-delay: 0.1s;
}
.green-circle {
  animation-delay: 0.2s;
}
.red-circle {
  animation-delay: 0.3s;
}
</style>