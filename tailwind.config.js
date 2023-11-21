/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily:{
        Franklin:"'Libre Franklin', sans-serif",
      }, 
      colors: {
        primary:{
          100: "hsl(223, 87%, 63%)"
        },
        secondary:{
          100: "hsl(223, 100%, 88%)",
          200: "hsl(354, 100%, 66%)"
        }, 
        neutral: {
          100: "hsl(0, 0%, 59%)",
          200: "hsl(209, 33%, 12%)"
        }
      },
      screens:{
        desktop: "1440px"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  corePlugins:{
    preflight: false
  },
}