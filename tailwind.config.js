import {
  BreakPoints,
  generateBreakPoints,
  generatePalette,
  PaletteColors,
  ThemeOperator,
} from './src/theme/theme-data'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: generatePalette(PaletteColors),
    screens: generateBreakPoints(ThemeOperator.TailwindOp, BreakPoints),
    extend: {
      fontFamily: {
        sans: ['Nunito'],
      },
    },
  },
  plugins: [],
}
