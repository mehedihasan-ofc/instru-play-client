/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'logo': ['Spicy Rice', 'cursive'],
      'primary': ['Archivo', 'sans-serif'],
      'secondary': ['DM Sans', 'sans-serif'],
      'tertiary': ['Poppins', 'sans-serif'],
      'allura': ['Allura', 'cursive']
    }
  },
  plugins: [require("daisyui")],
}
