/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ['Archivo Black'],
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};