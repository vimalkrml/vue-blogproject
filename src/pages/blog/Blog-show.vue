<template>
  <div class="container mt-10 mx-auto">
    <router-link :to="{ name: 'Home' }" class="cursor-pointer text-xs" tag="div"
      >Go to Home page</router-link
    >
    <img
      src="../../assets/danie-franco-by0XNgDemsc-unsplash.jpg"
      class="block max-w-full"
    />
    <div>
      <h2>{{ blog.title }}</h2>
      <p class="w-[50%]">{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog-show",
  props: ["id"],
  data() {
    return {
      blogID: this.id,
      blog: { title: "", content: "" },
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
