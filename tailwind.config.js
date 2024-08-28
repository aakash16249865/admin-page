/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'custome-gradient':'linear-gradient(90deg, #F15BB5, #9B5DE5, #00BBF9)'
      }
    },
  },
  plugins: [],
}