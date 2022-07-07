<template>
  <custom-container>
    <router-link
      :to="{ name: 'Home' }"
      class="cursor-pointer text-xs flex gap-1 items-center mb-10"
    >
      <div class="w-5 md:w-8">
        <img src="../../assets/left-arrow.png" alt="Back" class="w-[20px]" />
      </div>
      <h1 class="text-[#626262]">Back to Home</h1>
    </router-link>

    <no-blogs v-if="isLoading"></no-blogs>

    <div v-else class="container">
      <img
        :src="blog.url"
        class="block mb-5 h-[300px] md:h-[300px] lg:h-[395px] xl:h-[600px] w-full object-cover"
      />
      <div>
        <h2 class="text-3xl font-primary mb-8 w-full">
          {{ blog.title }}
        </h2>
        <p class="mb-5 font-primary leading-6 tracking-[0.6px] italic">
          {{ blog.content }}
        </p>
        <div
          class="font-primary mb-5 text-md text-[#626262]"
          v-html="blog.description"
        ></div>
        <img
          :src="blog.image"
          class="block grayscale mb-5 h-[300px] md:h-[300px] lg:h-[395px] xl:h-[600px] w-full object-cover"
        />
        <p class="font-primary text-md mb-10">{{ blog.conclusion }}</p>
      </div>
    </div>
  </custom-container>
</template>

<script>
import NoBlogs from "../../components/No-blogs.vue";
import CustomContainer from "../../components/CustomContainer.vue";
export default {
  components: {
    CustomContainer,
    NoBlogs,
  },
  name: "Blog-show",
  props: ["id"],
  data() {
    return {
      blogID: this.id,
      blog: { title: "", content: "", description: "", conclusion: "" },
      isLoading: true,
    };
  },
  methods: {
    async getBlogs() {
      const res = await fetch("http://localhost:3000/blogs/" + this.blogID);
      const data = await res.json();
      this.blog = data;
    },
  },
  mounted() {
    this.getBlogs();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>
