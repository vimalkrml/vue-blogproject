<template>
  <div class="container mt-10 mx-auto">
    <nav-bar></nav-bar>
    <img :src="blog.url" class="block max-w-full" />
    <div>
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
      <p>{{ blog.description }}</p>
    </div>
  </div>
</template>

<script>
import NavBar from "./Nav-bar.vue";
export default {
  name: "Blog-show",
  components: {
    NavBar,
  },
  props: ["id"],
  data() {
    return {
      blogID: this.id,
      blog: { title: "", content: "", description: "" },
    };
  },
  methods: {
    async getBlogs() {
      const res = await fetch("http://localhost:3000/blogs/" + this.blogID);
      const data = await res.json();
      return JSON.parse(JSON.stringify(data));
    },
  },
  async mounted() {
    let data = await this.getBlogs();
    // console.log(JSON.parse(JSON.stringify(data)));
    this.blog = await data;
    // console.log(JSON.parse(JSON.stringify(this.blog)));
  },
};
</script>
