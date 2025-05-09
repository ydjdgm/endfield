// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'border-stone-200',
    'border-cyan-500',
    'border-yellow-300',
    'border-red-700',
    'border-green-700',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
