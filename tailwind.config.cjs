const defaultTheme = require('tailwindcss/defaultTheme');
import { emerald, red } from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: emerald[600],
        secondary: 'var(--aw-color-secondary)',
        accent: red[500],
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: [
          'Times New Roman',
          'Yu Mincho',
          'YuMincho',
          'Hiragino Mincho ProN',
          'Meiryo',
          'serif',
          ...defaultTheme.fontFamily.serif,
        ],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
