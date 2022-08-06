/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      zinc: colors.zinc,
      slate: colors.slate,
      polar: {
        100: '#4C566A',
        200: '#434C5E',
        300: '#3B4252',
        400: '#2E3440'
      },
      snow: {
        100: '#ECEFF4',
        200: '#E5E9F0',
        300: '#D8DEE9'
      },
      frost: {
        100: '#8FBCBB',
        200: '#88C0D0',
        300: '#81A1C1',
        400: '#5E81AC'
      },
      aurora: {
        red: '#BF616A',
        orange: '#D08770',
        yellow: '#EBCB8B',
        green: '#A3BE8C',
        purple: '#B48EAD'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
