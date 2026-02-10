
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,jsx,tsx,mdx}',
    './src/components/**/*.{js,jsx,tsx,mdx}',
    './src/pages/**/*.{js,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          hover: 'rgb(var(--color-surface-hover) / <alpha-value>)',
        },
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'text-md': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'text-sm': ['14px', { lineHeight: '24px', fontWeight: '400' }],
      }
    }
  },
  plugins: [],
} satisfies Config;

