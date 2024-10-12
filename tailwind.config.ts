import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

export default {
  content: ['.vitepress/theme/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography],
} satisfies Config;
