/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,0) 15%,rgba(20,20,20,.50) 50%,rgba(20,20,20,.80) 80%,#141414 95%,#141414 100%);',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), 
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
