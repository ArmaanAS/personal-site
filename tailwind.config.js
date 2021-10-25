const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#B947E1',
        secondary: '#F1187A',
        // tertiary: '#990A4A',
        // tertiary: '#AD0B54',
        // tertiary: '#940088',
        tertiary: '#8F004F',
        purple: {
          backdrop: '#241F3E',
          background: '#121128',
          surface: '#1D1933',
          "surface-light": '#362F60',
          tile: '#2A263E',
          // "tile-light": '#3D3A50'
          // "tile-light": '#363347'
          "tile-light": '#332F4C'
        },
        violet: colors.violet,
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        warmgray: colors.warmGray,
        title: '#D8D7EA',
        body: '#9995AD'
      },
      fontFamily: {
        body: [],
        title: []
      },
      borderRadius: {
        '3.5xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        stripe: 'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
        'inner-xl': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.12)',
        high: 'inset 0 1px 1px 0 hsl(0deg 0% 100% / 20%), 0 10px 20px -4px rgb(50 50 93 / 25%), 0 8px 15px -8px rgb(0 0 0 / 80%)'
      },
      transitionDelay: {
        1500: '1.5s',
        2000: '2s',
      },
      transitionProperty: {
        dim: "height, width"
      },
      maxWidth: {
        10: '2.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
