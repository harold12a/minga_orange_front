/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        backgroundImage:{
          'main-home':'url(/assets/branden-sk.jpg',
          'nav-home':'url(/assets/images/Nav mobile.png',
          'desktop':'url(/assets/branden-desktop.png',
          'main-manga':'url(/assets/images/pexels-lisa.jpg)'
        },
        colors:{
          primary:{
            100:'#4338CA',
            seinen: '#FC9C57',
            shoujo: '#00BA88',
            shounen: '#EF8481',
            comics: '#8883F0',
          }
         
        }
      }
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

