<template>
  <div>
    <nav class="flex justify-between p-1 px-16 py-6">
      <h1 class="font-miminmo text-2xl tracking-widest">MIMINMØ</h1>
      <div class="font-primary flex gap-20 text-[#626262]">
        <button @click="create_blog()" class="">CREATE BLOG</button>
      </div>
    </nav>
    <tiptap class="text-center" />
    <blog-create :show="createBlog"></blog-create>
  </div>
</template>

<script>
import Tiptap from "../../components/Tip-tap.vue";
import BlogCreate from "../../components/Blog-create.vue";
export default {
  name: "Nav-bar",
  components: {
    Tiptap,
    BlogCreate,
  },
  data() {
    return {
      createBlog: false,
    };
  },
  methods: {
    create_blog() {
      setTimeout(() => {
        this.createBlog = true;
      }, 1000);
      console.log("blog");
    },
  },
};
</script>