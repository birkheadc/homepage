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
      }
    },
    colors: {
      berry: '#b80a41',
      grape: '#4e4ba8',
      kiwi: '#6eb122',
      dandelion: '#daac06',
      teal: '#00938a',
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
