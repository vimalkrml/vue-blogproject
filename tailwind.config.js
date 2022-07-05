/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Playfair Display', 'sans-serif'],
        'secondary': ['Ubuntu', 'sans-serif'],
        'miminmo':['Inconsolata', 'monospace']
      }
    },
  },
  plugins: [],
}
