/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kosugiMaru: ["Kosugi Maru", "sans-serif"],
        noto: ["Noto Serif JP", "serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
