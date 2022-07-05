<template>
  <div class="w-[40%] mx-auto mb-5">
    <img
      src="../assets/danie-franco-by0XNgDemsc-unsplash.jpg"
      class="block max-w-full"
    />
    <h2 v-show="blogs">{{ blogs.title }}</h2>
    <p v-show="blogs">
      {{ blogs.content }}
    </p>
  </div>
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
