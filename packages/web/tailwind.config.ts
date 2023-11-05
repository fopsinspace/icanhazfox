import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
