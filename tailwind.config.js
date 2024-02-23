/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        primary: "#ff9900",
        secondary: "#2a414f",
        accent: "#95A0A7",
      },
    },
  },
  plugins: [],
};
