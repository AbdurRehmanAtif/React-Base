/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' // Add this line for Flowbite React
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        backgroundColor: "#faf5ff",
        HoverText: "#f3e8ff",
        textDark: '#0705ef'

      },
      fontFamily: {
        'fresh-sans-regular': ['./src/fonts/FreshSansRegular.ttf', 'fresh-sans-regular'], // Adjust the path as per your folder structure
        'fresh-sans-medium': ['./src/fonts/FreshSansMedium.ttf', 'fresh-sans-medium'], // Adjust the path as per your folder structure

      },
    },
  },
  plugins: [
    "tailwindcss",
    "autoprefixer",
    require('flowbite/plugin') // Add this line for Flowbite plugin
  ]
};
