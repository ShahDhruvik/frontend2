import { PaletteColors } from "src/theme/palette"

export type DynamicPaletteOptions = {
    [K in keyof typeof PaletteColors]: {
        main: string;
        light: string;
        dark: string;
    };
};

declare module '@mui/material/styles' {
    interface Palette extends DynamicPaletteOptions { }

    interface PaletteOptions extends DynamicPaletteOptions { }
}