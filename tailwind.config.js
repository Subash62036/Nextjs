/* eslint-disable global-require */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      ...colors,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F9D815',
          50: '#FFFDF0',
          100: '#FEF9DC',
          200: '#FDF3B4',
          300: '#FCEC8D',
          400: '#FBE665',
          500: '#FADF3D',
          600: '#F9D815',
          700: '#C2A705',
          800: '#8B7804',
          900: '#544902',
        },
        secondary: {
          50: '#f7f8f9',
          100: '#f0f1f3',
          200: '#d8dce2',
          300: '#c1c7d1',
          400: '#939eae',
          500: '#64748b',
          600: '#5a687d',
          700: '#4b5768',
          800: '#3c4653',
          900: '#313944',
        },
        tertiary: {
          50: '#f3fcfc',
          100: '#e7f8fa',
          200: '#c4eef2',
          300: '#a0e4ea',
          400: '#58d0da',
          500: '#11bcca',
          600: '#0fa9b6',
          700: '#0d8d98',
          800: '#0a7179',
          900: '#085c63',
        },
        gradient: {
          200: '#11bcca',
          500: '#0166f4',
        },
        grey: {
          DEFAULT: '#73737B',
          50: '#E9E9EA',
          100: '#DCDCDE',
          200: '#C2C2C5',
          300: '#A7A7AD',
          400: '#8D8D94',
          500: '#73737B',
          600: '#5A5A61',
          700: '#424246',
          800: '#29292C',
          900: '#101012',
        },
        accent: '#11bcca',
        'la-palma': {
          DEFAULT: '#13B410',
          50: '#B3F8B1',
          100: '#9CF69A',
          200: '#6EF26B',
          300: '#40EE3C',
          400: '#18E314',
          500: '#13B410',
          600: '#0E850C',
          700: '#095608',
          800: '#042704',
          900: '#000000',
        },
        'dodger-blue': {
          DEFAULT: '#306AFF',
          50: '#FFFFFF',
          100: '#FCFDFF',
          200: '#C9D8FF',
          300: '#96B3FF',
          400: '#638FFF',
          500: '#306AFF',
          600: '#0047FC',
          700: '#0038C9',
          800: '#002A96',
          900: '#001C63',
        },
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        55: '55rem',
      },
      spacing: {
        64: '16rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      opacity: {
        80: '.8',
      },
      zIndex: {
        '-10': -10,
        '-5': -5,
        2: 2,
        3: 3,
      },
      inset: {
        '-100': '-100%',
        '-225-px': '-225px',
        '-160-px': '-160px',
        '-150-px': '-150px',
        '-94-px': '-94px',
        '-50-px': '-50px',
        '-29-px': '-29px',
        '-20-px': '-20px',
        '25-px': '25px',
        '40-px': '40px',
        '95-px': '95px',
        '145-px': '145px',
        '195-px': '195px',
        '210-px': '210px',
        '260-px': '260px',
      },
      height: {
        '95-px': '95px',
        '70-px': '70px',
        '350-px': '350px',
        '500-px': '500px',
        '600-px': '600px',
      },
      maxHeight: {
        '860-px': '860px',
      },
      maxWidth: {
        '100-px': '100px',
        '120-px': '120px',
        '150-px': '150px',
        '180-px': '180px',
        '200-px': '200px',
        '210-px': '210px',
        '580-px': '580px',
      },
      minWidth: {
        '140-px': '140px',
        48: '12rem',
      },
      backgroundSize: {
        full: '100%',
      },
      fontFamily: {
        sans: ['PT Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(({ addComponents, theme }) => {
      const screens = theme('screens', {});
      addComponents([
        {
          '.container': { width: '100%' },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            '.container': {
              'max-width': '640px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            '.container': {
              'max-width': '768px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            '.container': {
              'max-width': '1024px',
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            '.container': {
              'max-width': '1280px',
            },
          },
        },
        {
          [`@media (min-width: ${screens['2xl']})`]: {
            '.container': {
              'max-width': `${screens['2xl']}`,
            },
          },
        },
      ]);
    }),
  ],
};
