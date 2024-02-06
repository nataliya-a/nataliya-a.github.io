/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      'colors': {
        'blue3' : '#C9EBFF',
        'lavender' : '#E6E6FA',
        'white' : '#FFFFFF',
        'skypink' : "#F3DCF7"
    },
    },
  },
  plugins: [require("daisyui")],
}

