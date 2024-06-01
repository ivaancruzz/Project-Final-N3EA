/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: 'rgba(16, 14, 29, 1)', 
        customSecondaryDark: 'rgba(30, 33, 58, 1)',
        customGray: 'rgba(97, 100, 117, 1)',
      },
    },
  },
  plugins: [],
}
