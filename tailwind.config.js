/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D2A5E',
        'secondary': '#FDB813',
        'accent': '#4DB1A1',
        'light-bg': '#F9FAFB',
        'light-alt-bg': '#F3F4F6',
        'dark-text': '#1F2937',
        'body-text': '#374151',
        'border-gray': '#D1D5DB',
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}