<<<<<<< HEAD
=======
<template>
  <div
    class="h-52 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
  >
    <button type="button" @click="handleH1">H1</button>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";

export default {
  components: {
    EditorContent,
  },

  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
    };
  },
  methods: {
    handleH1() {
      this.editor.commands.toggleHeading({ level: 1 });
    },
  },
  watch: {
    value(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.value,
      extensions: [StarterKit, Heading],
      onUpdate: () => {
        // HTML
        this.$emit("input", this.editor.getHTML());

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style>
.ProseMirror {
  /* padding: 1rem; */
  /* border: 2px solid rgb(193, 193, 193); */
}
.ProseMirror h1 {
  font-size: 3rem;
}
.ProseMirror h2 {
  font-size: 2.5rem;
}
.ProseMirror h3 {
  font-size: 2rem;
}
</style>
>>>>>>> e55bd3e0a0c669dbaea9cada3ed2beb193df1884
