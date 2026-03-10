import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#111111',
        'bg-card': '#0F0F0F',
        'accent': '#3B82F6',
        'accent-light': '#60A5FA',
        'success': '#10B981',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'var(--font-arabic)', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
