/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#28e98c",
        container_color: "#1f1f1f",
      },
    },
  },
  plugins: [],
};