import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */


module.exports ={
  content:[
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
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
        darkshadow: "#000000",
      },
      animation:{
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage:{
        orbitLight: 'repeating-radial-gradient(#00214d 2px ,#fffffe 5px,#fffffe 100px);',
        orbitDark: 'repeating-radial-gradient(#fffffe 2px ,#00214d 8px,#00214d 100px);',
        orbitLightLg: 'repeating-radial-gradient(#00214d 2px ,#fffffe 5px,#fffffe 80px);',
        orbitDarkLg: 'repeating-radial-gradient(#fffffe 2px ,#00214d 8px,#00214d 80px);',
        orbitLightMd: 'repeating-radial-gradient(#00214d 2px ,#fffffe 5px,#fffffe 60px);',
        orbitDarkMd: 'repeating-radial-gradient(#fffffe 2px ,#00214d 6px,#00214d 60px);',
        orbitLightSm: 'repeating-radial-gradient(#00214d 2px ,#fffffe 5px,#fffffe 40px);',
        orbitDarkSm: 'repeating-radial-gradient(#fffffe 2px ,#00214d 4px,#00214d 40px);',
      }
      
    },
    screens:{
      "2xl": {max: "1535px"},
      //this means  @media(max-width: 1535px )
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }

    }
  },
  plugins: [],
}

// export const plugins = []
