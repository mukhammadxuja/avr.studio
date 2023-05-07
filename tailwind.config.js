/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.{html,js}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      animation: {
        handAnimation: "handAnimation 2s linear infinite",
      },
      keyframes: {
        handAnimation: {
          "0%": { transform: "rotate( 0.0deg)" },
          "10%": {
            transform: "rotate(14.0deg)",
          },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg) " },
          "40%": { transform: "rotate(-4.0deg) " },
          "50%": { transform: "rotate(10.0deg) " },
          "60%": {
            transform: "rotate(0.0deg)",
          },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
    },
  },
  plugins: [],
};
