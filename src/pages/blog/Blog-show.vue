<template>
  <div class="container mt-10 mx-auto">
    <nav-bar></nav-bar>
    <img :src="blog.url" class="block max-w-full mb-5" />
    <div>
      <h2 class="text-3xl font-primary mb-8">{{ blog.title }}</h2>
      <p class="text-lg mb-5 font-primary leading-6 tracking-[0.6px]">
        {{ blog.content }}
      </p>
      <p class="font-primary text-lg">{{ blog.description }}</p>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/Nav-bar.vue";
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
