/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "Playfair-Display": ["Playfair Display", "sans-serif"],
        "Rokkitt": ["Rokkitt", "serif"],
      },
      gridTemplateRows: {
        sidebar: "15% 65% 15%",
      },
    },
  },
  plugins: [],
}
