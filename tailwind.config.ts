import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './mdx-components.tsx'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7'
        }
      }
    }
  },
  plugins: []
} satisfies Config
