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
      'black': colors.black,
      'gray': colors.gray,
      'white': colors.white,
      'slate': colors.slate,
      'amber': colors.amber,
      'yellow': colors.yellow,
      'sky': colors.sky,
      'secondary': {
        '50': '#ecfffe',
        '100': '#cffefd',
        '200': '#a5fcfc',
        '300': '#7af8fa',
        '400': '#22e8ee',
        '500': '#06cbd4',
        '600': '#08a2b2',
        '700': '#0e8190',
        '800': '#156875',
        '900': '#165663',
        '950': '#083944',
      },
      'primary': {
        '50': '#f2f0fd',
        '100': '#e7e3fc',
        '200': '#d4ccf9',
        '300': '#bdaef3',
        '400': '#a98dec',
        '500': '#9b71e3',
        '600': '#8e56d5',
        '700': '#7d46bc',
        '800': '#653b98',
        '900': '#49306b',
        '950': '#312046',
      },
      'neutral': {
        '50': '#f9f7f8',
        '100': '#f3f0f1',
        '200': '#e9e2e5',
        '300': '#d7cad0',
        '400': '#bfacb5',
        '500': '#a68d99',
        '600': '#8c7280',
        '700': '#745c6a',
        '800': '#624f5a',
        '900': '#55464f',
        '950': '#2d2429',
      },
      'translucent': {
        '10': 'rgba(0, 0, 0, 0.1)',
        '20': 'rgba(0, 0, 0, 0.2)',
        '30': 'rgba(0, 0, 0, 0.3)',
        '40': 'rgba(0, 0, 0, 0.4)',
        '50': 'rgba(0, 0, 0, 0.5)',
        '60': 'rgba(0, 0, 0, 0.6)',
        '70': 'rgba(0, 0, 0, 0.7)',
        '80': 'rgba(0, 0, 0, 0.8)',
        '90': 'rgba(0, 0, 0, 0.9)',
      }
    }
  },
  plugins: [],
};
export default config;
