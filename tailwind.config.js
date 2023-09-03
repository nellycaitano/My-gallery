/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'write':'Montserrat',
      },

      boxShadow:{
        'effect':'0px 4px 6px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

