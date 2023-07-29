/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAF0E4",
        devcard: "#E8E4FB",
        purplegradient: "#9D00FE",
        bluegradient: "#00F0FF",
      },
    },
  },
  plugins: [],
};
