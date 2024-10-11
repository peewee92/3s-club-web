const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#faf8f0",
          100: "#f1ecd4",
          200: "#dbcf90",
          300: "#d3c176",
          400: "#c8ae57",
          500: "#be9542",
          600: "#a77738",
          700: "#8c5c31",
          800: "#734b2d",
          900: "#5f3e28",
          950: "#352013",
        },
        baseBg: "#f7f7f7"
      },
      boxShadow: {
        'base': '0px 3px 21px 1px rgba(145,145,145,0.24)',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
