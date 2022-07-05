<template>
  <div>
    <router-link
      class="flex flex-wrap gap-5 cursor-pointer"
      :to="{ name: 'ShowBlogs' }"
      tag="div"
    >
      <div
        class="w-[40%] mx-auto mb-5"
        v-for="blog in blogs"
        :key="blog.id"
        @click="showBlog(blog.id)"
      >
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
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: "",
      blog: {
        id: "",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async getBlogs() {
      const res = await fetch("http://localhost:3000/blogs");
      const data = await res.json();
      return data;
    },
    async showBlog(blogid) {
      console.log(blogid);
      await fetch("http://localhost:3000/blogs/" + blogid)
        .then((res) => res.json())
        .then((json) => {
          this.blog = json;
          console.log(json);
          return;
        });
    },
  },
  async created() {
    console.log(await this.getBlogs());
    this.blogs = await this.getBlogs();
  },
};
</script>
