/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: "#0F1624",
        },
        primary: {
          DEFAULT: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#BCBCBC",
        },
        gradient: {
          DEFAULT: "linear-gradient(to right, #945DD6, #6978D1, #13ADC7)",
        },
      },
    },
  },
  plugins: [],
}
