/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        timeline: "#FF9900",
        white: "#ffff",
      },
    },
  },
  plugins: [],
};
