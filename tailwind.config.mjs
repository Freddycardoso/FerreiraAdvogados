/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F131A',
        ink2: '#161B24',
        stone: '#E8E6E1',
        paper: '#F4F3EF',
        vinho: '#7A1F2E',
        vinhoescuro: '#621825',
        prata: '#C9CED6',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Libre Franklin"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
