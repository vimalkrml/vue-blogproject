<template>
  <section>
    <div class="md:flex flex-wrap gap-5" v-if="blogs.length > 0">
      <div
        class="md:w-[40%] mx-auto mb-20 md:mb-5"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <router-link
          :to="{ name: 'ShowBlogs', params: { id: blog.id } }"
          class="cursor-pointer text-xs"
        >
          <img
            :src="blog.url"
            class="
              block
              mb-5
              h-[300px]
              md:h-[300px]
              lg:h-[395px]
              w-full
              object-cover
            "
          />
          <h3 class="font-secondary text-sm opacity-50 mb-3.5 uppercase">
            Lifestyle
          </h3>
          <div v-show="blogs">
            <h2 class="text-3xl font-primary mb-8">{{ blog.title }}</h2>
            <p
              class="
                text-sm
                font-primary
                text-[#626262]
                leading-6
                tracking-[0.6px]
              "
            >
              {{ blog.content }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
    <no-blogs v-else></no-blogs>
  </section>
</template>

<script>
import NoBlogs from "./No-blogs.vue";
export default {
  components: { NoBlogs },
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
  },
};
</script>
