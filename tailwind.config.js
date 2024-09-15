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

      scale: {
        '120': '1.2',
        '130': '1.3',
      },

      boxShadow:{
        'effect':'0px 4px 6px rgba(0, 0, 0, 0.15)',
      },

      perspective: {
        '1000': '1000px',  
      },

      rotate: {
        'x-12': '12deg',
        'x-6': '6deg',
        'y-12': '12deg',
        'y-6': '6deg',
      },
    },
  },
  plugins: [],
}

