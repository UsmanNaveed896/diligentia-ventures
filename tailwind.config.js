/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3E4095",
        secondary:"#EC3237"
      },
      fontFamily: {
        texturina: ["Texturina", "serif"],
      },
    },
  },
  plugins: [],
}

