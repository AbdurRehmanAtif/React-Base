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
        customBlue: '#0f1729',
        customGreen: '#00ff00',
        headingGreen: '#0ca34d',
        powderBlue: "#B6D0E2"
      }
    },
  },
  plugins: [
    "tailwindcss",
    "autoprefixer",
    require('flowbite/plugin') // Add this line for Flowbite plugin
  ]
};
