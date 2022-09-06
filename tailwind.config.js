/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      ...colors,
      neon: {
        "n-black": "#2E0249",
        "n-puple-1": "#570A57",
        "n-purle-2": "#A91079",
        "n-pink": "#F806CC",
      },
    },
    extend: {
      animation: {
        tilt: "tilt 8s infinite linear",
      },

      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
