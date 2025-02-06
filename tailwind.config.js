/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
          primary: "#818181",
          secondary: "bg-gradient-to-r from-gray-100 to-neutral-400",
    },
  },
  },
  plugins: [],
}