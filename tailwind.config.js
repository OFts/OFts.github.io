/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'oafm-1': '#002635',
        'oafm-2': '#013440',
        'oafm-3': '#03A678',
        'oafm-4': '#F5882A',
        'oafm-5': '#EFE7BE',
      }
    },
  },
  plugins: [],
}

