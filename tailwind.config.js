/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#151515',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      spacing: {
        '45': '11.25rem', // 180px
      },
      width: {
        '45': '11.25rem', // 180px
      },
      height: {
        '45': '11.25rem', // 180px
        '24': '6rem', // 96px para o logo
        '19': '4.75rem', // 75px para o logo
        '17.5': '4.375rem', // 70px para o logo
      }
    },
  },
  plugins: [],
};