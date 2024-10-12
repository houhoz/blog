import type { Config } from 'tailwindcss';

export default {
  content: ['.vitepress/**/*.js', '.vitepress/**/*.vue', '.vitepress/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
