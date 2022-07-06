<template>
  <section class="flex flex-wrap gap-5">
    <div class="w-[40%] mx-auto mb-5" v-for="blog in blogs" :key="blog.id">
      <router-link
        :to="{ name: 'ShowBlogs', params: { id: blog.id } }"
        class="cursor-pointer text-xs"
      >
        <div class="w-full">
          <img :src="blog.path" class="block max-w-full object-cover" />
        </div>

        <div v-show="blogs">
          <h2>{{ blog.title }}</h2>
          <p class="w-[40%]">
            {{ blog.content }}
          </p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogs: "",
      // blogImages: [],
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
    // let tempblog = JSON.parse(JSON.stringify(this.blogs));
    // tempblog.forEach((blog) => {
    //   this.blogImages.push(blog.path);
    // });
  },
};
</script>
