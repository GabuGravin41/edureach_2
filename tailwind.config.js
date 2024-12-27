/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

module.exports = {
  content: [
    './core/templates/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
};