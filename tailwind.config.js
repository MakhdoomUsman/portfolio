/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popin: ["Poppins"],
      },
    },
    theme: {
      screens: {
        'sm': '420px',
      },
    },
  },
  plugins: [],
};
