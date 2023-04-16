import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    fontFamily: {
      robotos: ['var(--font-robotos)', ...fontFamily.serif],
    },
    colors:{
      primary: '#fffffe',
      headline: "#00214d",
      paragraph: "#1b2d45",
      highlight: "#00ebc7",
      secondary: "#ff5470",
      tertiary: "#fde24f",
    },
    animation:{
      'spin-slow': 'spin 8s linear infinite'
    },
    backgroundImage:{
      orbitLight: 'repeating-radial-gradient(#00214d 2px ,#fffffe 5px,#fffffe 100px);'
    }

  },
}
export const plugins = []
