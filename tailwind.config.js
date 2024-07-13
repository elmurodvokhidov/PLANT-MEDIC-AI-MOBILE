/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8f8f8",
        secondary: "#0891B2",
      },
      fontFamily: {
        nunitoblack: ["Nunito-Black", "sans-serif"],
        nunitoblackitalic: ["Nunito-Black-Italic", "sans-serif"],
        nunitobold: ["Nunito-Bold", "sans-serif"],
        nunitobolditalic: ["Nunito-Bold-Italic", "sans-serif"],
        nunitoextrabold: ["Nunito-Extra-Bold", "sans-serif"],
        nunitoextrabolditalic: ["Nunito-Extra-Bold-Italic", "sans-serif"],
        nunitoextralight: ["Nunito-Extra-Light", "sans-serif"],
        nunitoextralightitalic: ["Nunito-Extra-Light-Italic", "sans-serif"],
        nunitoitalic: ["Nunito-Italic", "sans-serif"],
        nunitolight: ["Nunito-Light", "sans-serif"],
        nunitolightitalic: ["Nunito-Light-Italic", "sans-serif"],
        nunitomedium: ["Nunito-Medium", "sans-serif"],
        nunitomediumitalic: ["Nunito-Medium-Italic", "sans-serif"],
        nunitoregular: ["Nunito-Regular", "sans-serif"],
        nunitosemibold: ["Nunito-Semi-Bold", "sans-serif"],
        nunitosemibolditalic: ["Nunito-Semi-Bold-Italic", "sans-serif"],
      }
    },
  },
  plugins: [],
}