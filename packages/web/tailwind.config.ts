import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      dropShadow: {
        heart: '0 1px 6px rgb(239 68 68)',
      },
      animation: {
        heart: 'heart 500ms cubic-bezier(0, 0.55, 0.45, 1) forwards',
      },
      keyframes: {
        heart: {
          '0%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 0px 0px currentColor)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
          '100%': {
            transform: 'scale(1)',
            filter: 'drop-shadow(0 1px 6px currentColor)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
