import type { Config } from 'tailwindcss';

const withOpacity = (variableName: string): any => {
  return ({ opacityValue }: { opacityValue: number }) =>
    opacityValue
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
};

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: withOpacity('--brand-primary'),
          light: withOpacity('--brand-light'),
          green: withOpacity('--brand-green'),
          'lemon-green': withOpacity('--brand-lemon-green'),
          'dark-green': withOpacity('--brand-dark-green'),
          yellow: withOpacity('--brand-yellow'),
          red: withOpacity('--brand-red'),
        },
      },
      fontFamily: {
        exo: ['var(--font-exo)'],
      },
      fontSize: {
        'brand-md': 'var(--brand-font-size-md)',
        'brand-2xl': 'var(--brand-font-size-2xl)',
        'brand-3xl': 'var(--brand-font-size-3xl)',
      },
      boxShadow: {
        'brand-100': 'var(--brand-shadow-100)',
        'brand-200': 'var(--brand-shadow-200)',
        'brand-300': 'var(--brand-shadow-300)',
        'brand-400': 'var(--brand-shadow-400)',
        'brand-500': 'var(--brand-shadow-500)',
        'brand-600': 'var(--brand-shadow-600)',
        'brand-700': 'var(--brand-shadow-700)',
        'brand-800': 'var(--brand-shadow-800)',
      },
      borderRadius: {
        'brand-100': 'var(--brand-radius-100)',
        'brand-200': 'var(--brand-radius-200)',
        'brand-300': 'var(--brand-radius-300)',
        'brand-400': 'var(--brand-radius-400)',
      },
      width: {
        'brand-fit': 'var(--brand-width-fit)',
      },
      maxWidth: {
        'brand-section': 'var(--brand-max-width-section)',
        'brand-md': 'var(--brand-max-width-md)',
      },
      screens: {
        'brand-min': '24.375rem',
        'brand-big-phone': '28.125rem',
        'brand-big-tablet': '62rem',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
