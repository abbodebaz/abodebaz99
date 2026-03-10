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
        'bg-primary': '#0B0F19',
        'bg-secondary': '#111827',
        'bg-card': '#0D1117',
        'accent': '#3B82F6',
        'accent-light': '#60A5FA',
        'success': '#10B981',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
