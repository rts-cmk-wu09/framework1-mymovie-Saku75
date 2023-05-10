/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      height: {
        screen: "100svh",
      },
      minHeight: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
