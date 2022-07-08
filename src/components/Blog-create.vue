<template>
  <form class="px-20">
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
        placeholder="Blog title"
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
        maxlength="100"
        class="
          h-28
          resize-none
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
        placeholder="Not exceeds more than 100 words"
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
        maxlength="2000"
        class="
          resize-none
          h-52
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
        placeholder="Not exceeds more than 2000 words"
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
        maxlength="100"
        class="
          resize-none
          h-24
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
        placeholder="Not exceeds more than 100 words"
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
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
        >I agree with the
        <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
          >terms and conditions</a
        ></label
      >
    </div>
    <div class="text-center mb-20">
      <button
        type="submit"
        class="
          text-white
          bg-slate-600
          hover:bg-slate-800
          focus:ring-4 focus:outline-none focus:ring-slate-300
          font-medium
          rounded-lg
          text-sm
          px-5
          py-2.5
          text-center
          dark:bg--600 dark:hover:bg-slate-700 dark:focus:ring-slate-800
        "
      >
        Add Blog
      </button>
    </div>
  </form>
</template>

<script>
export default {
  components: {},
};
</script>
