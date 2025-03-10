/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f4ec",
          100: "#ebe9d7",
          200: "#d6d3ae",
          300: "#c0bc85",
          400: "#aaa666",
          500: "#a29c68",
          600: "#827f53",
          700: "#61613f",
          800: "#41412b",
          900: "#212116",
        },
        neutral: {
          50: "#f9f9f7",
          100: "#f2f2ed",
          200: "#e4e4d9",
          300: "#d2d2bf",
          400: "#b8b8a1",
          500: "#98987f",
          600: "#75755f",
          700: "#565647",
          800: "#3b3b30",
          900: "#23231c",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
