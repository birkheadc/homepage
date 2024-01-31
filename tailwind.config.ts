import { createThemes } from 'tw-colors';
import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 2s linear infinite'
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      boxShadow: {
        'inner': 'inset 4px 4px 8px black',
        '3d': '12px 0px 0px #4f4f4f, 24px 12px 24px black',
        '3xl': '8px 8px 16px black'
      },
      transitionDelay: {
        '600': '600ms'
      },
      borderRadius: {
        '5xl': '3rem'
      },
      screens: {
        'short': { 'raw': '(max-height: 500px)' }
      },
      width: {
        'double': '200%'
      },
      height: {
        'double': '200%'
      },
    },
    colors: {
      'white': '#ffffff',
      'gray': '#888888',
      'black': '#000000',
      'berry': {
        '50': '#fff0f2',
        '100': '#ffe3e7',
        '200': '#ffcbd5',
        '300': '#ffa0b3',
        '400': '#ff6b8c',
        '500': '#fc3767',
        '600': '#e91552',
        '700': '#b80a41',
        '800': '#a50c41',
        '900': '#8d0e3e',
        '950': '#4f021e',
      },
      'grape': {
        '50': '#f3f4fb',
        '100': '#e4e6f5',
        '200': '#cfd4ee',
        '300': '#adb6e3',
        '400': '#8692d4',
        '500': '#6a72c7',
        '600': '#5658ba',
        '700': '#4e4ba8',
        '800': '#46428b',
        '900': '#3b396f',
        '950': '#282645',
      },
      'kiwi': {
        '50': '#f5fce9',
        '100': '#e8f8cf',
        '200': '#d1f2a4',
        '300': '#b2e76f',
        '400': '#95d843',
        '500': '#6eb122',
        '600': '#5a9719',
        '700': '#457318',
        '800': '#395c18',
        '900': '#324e19',
        '950': '#172b08',
      },
      'dandelion': {
        '50': '#fefee8',
        '100': '#fdfec3',
        '200': '#fdfb8b',
        '300': '#fcf248',
        '400': '#f8e317',
        '500': '#e8ca0a',
        '600': '#daac06',
        '700': '#a07208',
        '800': '#84590f',
        '900': '#704913',
        '950': '#422606',
      },
      'teal': {
        '50': '#eefffb',
        '100': '#c5fff6',
        '200': '#8bffee',
        '300': '#4afee5',
        '400': '#15ecd5',
        '500': '#00d0bc',
        '600': '#00a89b',
        '700': '#00938a',
        '800': '#066965',
        '900': '#0a5752',
        '950': '#003535',
      },
      // berry: '#b80a41',
      // grape: '#4e4ba8',
      // kiwi: '#6eb122',
      // dandelion: '#daac06',
      // teal: '#00938a',
      neutral: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
      }
    }
  },
  plugins: [
    createThemes({
      a: {
        primary: {
          '0': '#0f380f',
          '1': '#306230',
          '2': '#8bac0f',
          '3': '#b4d138',
        }
      },
      b: {
        primary: {
          '0': '#000000',
          '1': '#9d93f6',
          '2': '#e88888',
          '3': '#f8f8aa',
        }
      },
      c: {
        primary: {
          '0': '#000000',
          '1': '#f83300',
          '2': '#00f800',
          '3': '#f8f8f8',
        }
      },
      d: {
        primary: {
          '0': '#000000',
          '1': '#804000',
          '2': '#e89850',
          '3': '#f8f8f8',
        }
      },
      e: {
        primary: {
          '0': '#000000',
          '1': '#0033ff',
          '2': '#78a8f8',
          '3': '#f8f8f8',
        }
      },
      f: {
        primary: {
          '0': '#000000',
          '1': '#f83300',
          '2': '#f0ff00',
          '3': '#f8f8f8',
        }
      },
      g: {
        primary: {
          '0': '#000000',
          '1': '#0033ff',
          '2': '#00f800',
          '3': '#f8f8f8',
        }
      },
      h: {
        primary: {
          '0': '#000000',
          '1': '#a82727',
          '2': '#e88888',
          '3': '#f8f8f8',
        }
      },
      i: {
        primary: {
          '0': '#000000',
          '1': '#4633a0',
          '2': '#9d93f6',
          '3': '#f8f8f8',
        }
      },
      j: {
        primary: {
          '0': '#000000',
          '1': '#804000',
          '2': '#f0ff00',
          '3': '#f8f8f8',
        }
      },
      k: {
        primary: {
          '0': '#000000',
          '1': '#947b4a',
          '2': '#c5ac94',
          '3': '#f8e8e0',
        }
      },
      l: {
        primary: {
          '0': '#fffbff',
          '1': '#f0ff00',
          '2': '#00a2a1',
          '3': '#000000',
        }
      },
      m: {
        primary: {
          '0': '#000000',
          '1': '#727272',
          '2': '#b8b8b8',
          '3': '#f8f8f8',
        }
      }
    })
  ],
};
export default config;
