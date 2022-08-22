/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['winter', 'night']
  }
};
