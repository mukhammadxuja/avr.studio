const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/*.html", "./src/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media", // or 'media' or 'class'
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
      colors: {
        background: "var(--bg)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "inreport-primary": "var(--inreport-primary)",
        "inreport-lighter": "var(--inreport-lighter)",
        "inreport-secondary": "var(--inreport-secondary)",
        "dotsoft-primary": "var(--dotsoft-primary)",
        "dotsoft-lighter": "var(--dotsoft-lighter)",
        "dotsoft-secondary": "var(--dotsoft-secondary)",
        "edteach-primary": "var(--edteach-primary)",
        "edteach-lighter": "var(--edteach-lighter)",
        "edteach-secondary": "var(--edteach-secondary)",
        "lazydev-primary": "var(--lazydev-primary)",
        "lazydev-lighter": "var(--lazydev-lighter)",
        "lazydev-secondary": "var(--lazydev-secondary)",
        black: "var(--black)",
        grayscale: "var(--grayscale)",
      },
      animation: {
        handAnimation: "handAnimation 2s linear infinite",
        spinWord: "spinWord 8s",
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
        spinWord: {
          "10%": {
            transform: "translateY(0%)",
          },
          "20%": {
            transform: "translateY(-100%)",
          },
          "30%": {
            transform: "translateY(-100%)",
          },
          "40%": {
            transform: "translateY(-200%)",
          },
          "50%": {
            transform: "translateY(-200%)",
          },
          "60%": {
            transform: "translateY(-297%)",
          },
          "70%": {
            transform: "translateY(-297%)",
          },
          "80%": {
            transform: "translateY(-297%)",
          },
          "90%": {
            transform: "translateY(-297%)",
          },
          "100%": {
            transform: "translateY(-0%)",
          },
        },
      },
      fontFamily: {
        gotham: ["Gotham", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
