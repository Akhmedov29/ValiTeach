/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 🔥 BU QATOR MUHIM
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
