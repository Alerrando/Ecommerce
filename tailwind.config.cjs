/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "Playfair-Display": ["Playfair Display", "sans-serif"],
        "Rokkitt": ["Rokkitt", "serif"],
      }
    },
  },
  plugins: [],
}
