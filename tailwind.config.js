/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xxs': '425px', // min-width
      'sm': '640px', // min-width
      'md': '768px', // min-width
      'lg': '1024px', // min-width
      'xl': '1280px', // min-width
      '2xl': '1536px', // min-width
    },
    extend: {
      colors: {
        main: {
          DEFAULT: "#00103d",
          light: "#173d77",
          lighter: "#1c4b91",
        },
        second: {
          DEFAULT: "#ff8800",
          light: "#f89e00",
        },
        light: {
          DEFAULT: "#f1f1f1",
          gray: "#d1d1d1d1"
        },
      }
    },
  },
  plugins: [],
}

