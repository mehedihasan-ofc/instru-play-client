/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['Spicy Rice', 'cursive'],
      'secondary': ['Mulish', 'sans-serif'],
      'tertiary': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}

