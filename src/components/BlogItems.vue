<template>
  <section>
    <div class="flex flex-wrap gap-5">
      <div class="w-[40%] mx-auto mb-5" v-for="blog in blogs" :key="blog.id">
        <router-link
          :to="{ name: 'ShowBlogs', params: { id: blog.id } }"
          class="cursor-pointer text-xs"
        >
          <img :src="blog.url" class="block max-w-full object-cover mb-3.5" />

          <h3 class="font-secondary text-sm opacity-50 mb-3.5 uppercase">
            Lifestyle
          </h3>
          <div v-show="blogs">
            <h2 class="text-3xl font-primary mb-8">{{ blog.title }}</h2>
            <p class="text-sm font-primary leading-6 tracking-[0.6px]">
              {{ blog.content }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="text-center mt-10 mb-20">
      <button class="border-2 border-gray-300 px-4 py-2">Load more</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogs: "",
      images: [],
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
