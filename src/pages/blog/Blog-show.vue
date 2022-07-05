<template>
  <div class="mt-10">
    <router-link :to="{ name: 'Home' }" class="cursor-pointer text-xs" tag="div"
      >Go to main page</router-link
    >
    <img
      src="../../assets/danie-franco-by0XNgDemsc-unsplash.jpg"
      class="block max-w-full"
    />
    <div>
      <h2></h2>
      <p class="w-[40%]"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog-show",
  props: ["blog"],
};
</script>
