const withOpacity = (variableName: string): any => {
  return ({ opacityValue }: { opacityValue: number }) =>
    opacityValue
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
};

import type { Config } from 'tailwindcss';

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
