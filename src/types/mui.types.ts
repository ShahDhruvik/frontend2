import { PaletteColors } from "src/theme/palette"

export type DynamicPaletteOptions = {
    [K in keyof typeof PaletteColors]: {
        main: string;
        light: string;
        dark: string;
    };
};
export type DynamicButtonPaletteOptions = {
    [K in keyof typeof PaletteColors]: true
};

declare module '@mui/material/styles' {
    interface Palette extends DynamicPaletteOptions { }
    interface PaletteOptions extends DynamicPaletteOptions { }
    interface ButtonPropsColorOverrides extends DynamicButtonPaletteOptions { }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true
    }
    interface ButtonPropsColorOverrides extends DynamicButtonPaletteOptions { }
}