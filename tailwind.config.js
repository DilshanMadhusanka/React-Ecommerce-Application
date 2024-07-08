/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Black":"#1E2832",
        "PrimaryBG":"#1e28320d"
      },
      fontFamily: {
        'Primary': ["Roboto", "sans-serif"],
      },
      backgroundImage: theme => ({
        'section': "url('/src/assets/backgroundImage.png')",
      }),
    },
  },
  plugins: [],
}