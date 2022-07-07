<template>
  <form class="px-20" v-show="show">
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Blog Title</label
      >
      <input
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="blog title"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Blog URL</label
      >
      <input
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="eg:https://unsplash.com/photos"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Blog Content</label
      >
      <textarea
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="not exceeds more than 100 words"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Blog Description</label
      >
      <textarea
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="not exceeds more than 2000 words"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Image URL</label
      >
      <input
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="eg:https://unsplash.com/photos"
        required
      />
    </div>
    <div class="mb-6">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >Blog conclusion</label
      >
      <textarea
        type="text"
        class="
          shadow-sm
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          focus:ring-blue-500 focus:border-blue-500
          block
          w-full
          p-2.5
          dark:bg-gray-700
          dark:border-gray-600
          dark:placeholder-gray-400
          dark:text-white
          dark:focus:ring-blue-500
          dark:focus:border-blue-500
          dark:shadow-sm-light
        "
        placeholder="not exceeds more than 100 words"
        required
      />
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          value=""
          class="
            w-4
            h-4
            border border-gray-300
            rounded
            bg-gray-50
            focus:ring-3 focus:ring-blue-300
            dark:bg-gray-700
            dark:border-gray-600
            dark:focus:ring-blue-600
            dark:ring-offset-gray-800
          "
          required
        />
      </div>
      <label
        for="terms"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >I agree with the
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >terms and conditions</a
        ></label
      >
    </div>
    <button
      type="submit"
      class="
        text-white
        bg-blue-700
        hover:bg-blue-800
        focus:ring-4 focus:outline-none focus:ring-blue-300
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
      "
    >
      Create Blog
    </button>
  </form>
</template>

<script>
export default {
  props: ["show"],
};
</script>
