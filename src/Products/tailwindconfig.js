/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // enable tailwind everywhere
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0f0f2d",
        "bg-secondary": "#1c1c3a",
        "accent-1": "#00ffd5",
        "accent-2": "#ff4ecd",
      },
      fontFamily: {
        display: ['"Clash Display"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
