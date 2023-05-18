/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        backgroundImage:{
          'main-home':'url(../../src/assets/branden-sk.jpg',
          'nav-home':'url(../../src/assets/images/Nav mobile.png',
          'desktop':'url(../../src/assets/branden-desktop.png'
        },
        colors:{
          primary:{
            100:'#4338CA'
          }
        }
      }
  },
  variants: {},
  plugins: []
}
