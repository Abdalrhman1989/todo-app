/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Add this line to include components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
