const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['"Jetbrains Mono"', ...defaultTheme.fontFamily.mono],
                'sans': ['"Roboto"', ...defaultTheme.fontFamily.sans],
                'iceland': ['Tiny5', ...defaultTheme.fontFamily.sans]
            },
            animation: {
                "handTyped": 'handTyped 1.2s infinite'
            },
            keyframes: () => ({
                handTyped: {
                    '0%': {opacity: 1},
                    '50%': {opacity: 0},
                    '100%': {opacity: 1}
                },
            }),
        },
    },
    plugins: [],
}
