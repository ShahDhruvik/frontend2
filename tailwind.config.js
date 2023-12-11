import { generatePalette, PaletteColors } from './src/theme/palette'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: generatePalette(PaletteColors),
    extend: {
      fontFamily: {
        sans: ['Nunito'],
      },
    },
  },
  plugins: [],
}
