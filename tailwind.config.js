/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: { 
      fontSize: {
        xxs: '0.75rem'
      },
      fontFamily: {
        primary: ['Roboto', ...defaultTheme.fontFamily.sans],
        header: ['Freeman']
      },
      colors: {
        'primary': {
          100: '#E82C2C',
          400: '#E82C2C',
          500: '#C42126',
          600: '#7F1416',
        },
      }
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}

