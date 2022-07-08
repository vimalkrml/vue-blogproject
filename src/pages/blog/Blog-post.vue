<template>
  <div>
    <nav class="flex justify-between px-4 py-6">
      <router-link :to="{ name: 'Home' }">
        <h1 class="font-miminmo text-2xl tracking-widest">MIMINMØ</h1>
      </router-link>

      <router-link
        :to="{ name: 'CreateBlog' }"
        class="font-primary text-[#626262] hover:text-black"
      >
        <lord-icon
          src="https://cdn.lordicon.com/txmlvqat.json"
          trigger="hover"
          class="w-12 h-12"
        >
        </lord-icon>
        <button>CREATE BLOG</button>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>
