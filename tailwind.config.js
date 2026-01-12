/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#1e293b",
          900: "#0f172a",
        },
        cyan: {
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
}
