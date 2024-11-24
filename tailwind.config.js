/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pinkish: "#E23744",
        blueish: "#0E2368",
        lightGray: '#f8f8f8'
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        source: ["Source Sans 3", "sans-serif"],
      },

    },
  },
  plugins: [],
};
