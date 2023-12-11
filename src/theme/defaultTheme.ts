

import { createTheme, Theme } from '@mui/material/styles'
import { generatePalette, PaletteColors } from './palette'
import { DynamicPaletteOptions } from '@/types/mui.types'

const theme: Theme = createTheme({
    palette: { ...generatePalette(PaletteColors) as DynamicPaletteOptions },

})

export default theme