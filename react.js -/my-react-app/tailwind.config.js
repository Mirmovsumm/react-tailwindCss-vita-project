/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    module.exports = {
      darkMode: 'class', // veya 'media'
      // ...
    },
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#fea928",
        secondary:"#ed8900"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
}

