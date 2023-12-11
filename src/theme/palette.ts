
export enum PaletteColors {
    blue = '#00a1f1',
    darkBlue = '#0c1d38',
    red = '#a31d14'
}
export const generatePalette = (paletteColors: Record<string, string>) => {
    const colorPalette: Record<string, { main: string; light: string; dark: string }> = {}
    for (let i = 0; i < Object.keys(paletteColors).length; i++) {
        const element = Object.keys(paletteColors)[i]
        const colorValue = paletteColors[element]
        colorPalette[element] = { main: colorValue, light: colorValue, dark: colorValue }
    }
    return colorPalette
}