<template>
  <custom-container>
    <router-link
      :to="{ name: 'Home' }"
      class="cursor-pointer text-xs flex gap-2 items-center mb-10"
    >
      <div class="w-5 md:w-8">
        <img src="../../assets/left-arrow.png" alt="Back" />
      </div>
      <h1>Back to Home</h1>
    </router-link>
    <img
      :src="blog.url"
      class="
        block
        mb-5
        h-[300px]
        md:h-[300px]
        lg:h-[395px]
        xl:h-[600px]
        w-full
        object-cover
      "
    />
    <div>
      <h2 class="text-3xl font-primary mb-8 w-full">
        {{ blog.title }}
      </h2>
      <p class="mb-5 font-primary leading-6 tracking-[0.6px] italic px-6">
        {{ blog.content }}
      </p>
      <p class="font-primary mb-5 text-md text-[#626262]">
        {{ blog.description }}
      </p>
      <img
        :src="blog.image"
        class="
          block
          grayscale
          mb-5
          h-[300px]
          md:h-[300px]
          lg:h-[395px]
          xl:h-[600px]
          w-full
          object-cover
        "
      />
      <p class="font-primary text-md mb-10">{{ blog.conclusion }}</p>
    </div>
  </custom-container>
</template>

<script>
import CustomContainer from "../../components/CustomContainer.vue";
export default {
  components: {
    CustomContainer,
  },
  name: "Blog-show",
  props: ["id"],
  data() {
    return {
      blogID: this.id,
      blog: { title: "", content: "", description: "", conclusion: "" },
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
