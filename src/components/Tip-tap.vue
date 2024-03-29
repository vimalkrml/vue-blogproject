<template>
  <div
    class="
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
  >
    <div class="flex justify-between">
      <div class="flex gap-3">
        <div class="flex gap-1">
          <button
            class="p-[2px] hover:border font-secondary shadow-sm"
            type="button"
            @click="handleH1"
          >
            H1
          </button>
          <button
            class="p-[2px] hover:border font-secondary"
            type="button"
            @click="handleH2"
          >
            H2
          </button>
          <button
            class="p-[2px] hover:border font-secondary"
            type="button"
            @click="handleH3"
          >
            H3
          </button>
        </div>
        <div class="flex gap-1">
          <button
            class="p-[2px] hover:border font-secondary"
            type="button"
            @click="toggleBold"
          >
            B
          </button>
          <button
            class="p-[2px] hover:border font-primary italic"
            type="button"
            @click="toggleItalic"
          >
            I
          </button>
          <button
            class="p-[2px] hover:border font-primary italic border-b"
            type="button"
            @click="toggleUnderline"
          >
            U
          </button>
        </div>
      </div>
      <lord-icon
        @click="deleteText"
        src="https://cdn.lordicon.com/qsloqzpf.json"
        trigger="hover"
        colors="primary:#ffffff"
        class="w-5 cursor-pointer"
      >
      </lord-icon>
    </div>

    <div class="mt-5">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";

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
    handleH2() {
      this.editor.commands.toggleHeading({ level: 2 });
    },
    handleH3() {
      this.editor.commands.toggleHeading({ level: 3 });
    },
    toggleBold() {
      this.editor.commands.toggleBold();
    },
    toggleItalic() {
      this.editor.commands.toggleItalic();
    },
    toggleUnderline() {
      this.editor.commands.toggleUnderline();
    },
    deleteText() {
      this.editor.commands.deleteSelection();
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
      extensions: [StarterKit, Heading, Bold, Italic, Underline],
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
.ProseMirror:focus {
  outline: none;
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