/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rojoPrincipal': '#e03a3f',
        'gris1': '#e5e5e5',
      },
    },
  },
  plugins: [],
}