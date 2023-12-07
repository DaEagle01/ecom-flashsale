/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xs': "0px -3px 18px 0px rgba(0, 0, 0, 0.18)",
      }
    },
  },
  plugins: [],
}