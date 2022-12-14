/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  // https://mui.com/material-ui/guides/interoperability/#tailwind-css---
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
  // -------------------------------------------------------------------
};
