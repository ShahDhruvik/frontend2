
export enum PaletteColors {
    blue = '#3498db',
    white = '#ffffff',
    black = '#000000',
    gray = '#808080',
    green = '#2ecc71',
    red = '#e74c3c',
    yellow = '#f1c40f',
    orange = '#e67e22',
    purple = '#9b59b6',
    teal = '#008080',
    pink = '#e91e63',
    brown = '#a52a2a'
};
export const generatePalette = (paletteColors: Record<string, string>) => {
    const colorPalette: Record<string, { main: string; light: string; dark: string }> = {}
    for (let i = 0; i < Object.keys(paletteColors).length; i++) {
        const element = Object.keys(paletteColors)[i]
        const colorValue = paletteColors[element]
        colorPalette[element] = { main: colorValue, light: colorValue, dark: colorValue }
    }
    return colorPalette
}