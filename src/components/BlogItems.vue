<template>
  <section class="flex flex-wrap gap-5">
    <div class="w-[40%] mx-auto mb-5" v-for="blog in blogs" :key="blog.id">
      <img
        src="../assets/danie-franco-by0XNgDemsc-unsplash.jpg"
        class="block max-w-full"
      />
      <div v-show="blogs">
        <h2>{{ blog.title }}</h2>
        <p class="w-[40%]">
          {{ blog.content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogs: "",
    };
  },
  methods: {
    async getBlogs() {
      const res = await fetch("http://localhost:3000/blogs");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    console.log(await this.getBlogs());
    this.blogs = await this.getBlogs();
  },
};
</script>
