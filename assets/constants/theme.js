import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#FF00B8',
    secondary: '#FFFAF0',
    black: "#000000",
    blue: "#0077FF",
    orange: "#FB3F1C",
    dark: "#222222",
    light: "#9B8B97",
    white: "#FFFFFF",
    background: '#FFFFFF',
    grey: "#D9D9D9",
    lightGray: "#F2F2F7"
};


export const SIZES = {
    // global sizes
    base: 16,
    font: 14,
    radius: 20,
    padding: 24,

    // font sizes
    h1: 30,
    body: 16,
};

const appTheme = { COLORS, SIZES };

export default appTheme;