<template>
  <div>
    <nav class="flex justify-between px-4 py-6">
      <router-link :to="{ name: 'Home' }">
        <h1 class="font-miminmo text-2xl tracking-widest">MIMINMØ</h1>
      </router-link>

      <router-link
        :to="{ name: 'CreateBlog' }"
        class="font-primary flex gap-20 text-[#626262] hover:text-black"
      >
        <button class="">CREATE BLOG</button>
      </router-link>
    </nav>
    <!-- <tiptap class="text-center" /> -->
  </div>
</template>

<script>
// import Tiptap from "../../components/Tip-tap.vue";

export default {
  name: "Nav-bar",
};
</script>
