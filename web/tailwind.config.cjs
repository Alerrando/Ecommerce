/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "favoriteProduct": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
      colors: {
        "sombreamento": "rgba(0, 0, 0, 0.8)"
      },
      fontFamily: {
        "Playfair-Display": ["Playfair Display", "sans-serif"],
        "Rokkitt": ["Rokkitt", "serif"],
      },
      gridTemplateRows: {
        sidebar: "15% 65% 15%",
      },

      gridTemplateColumns: {
        "projetos": "repeat(auto-fit, minmax(290px, 1fr));",
      },
    },
  },
  plugins: [],
}
