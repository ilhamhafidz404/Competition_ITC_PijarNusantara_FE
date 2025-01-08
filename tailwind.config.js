/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Plus Jakarta Sans'", "sans-serif"],
        sekunder: ["'Kaushan Script'", "cursive"],
      },
      colors: {
        primary: "#ffd43b",
        secondary: "#fafafa",
      },
    },
  },
  plugins: [],
};
