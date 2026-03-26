export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#eb779d',
          light: '#fdf2f8',
          box: '#ef98b6'
        }
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}