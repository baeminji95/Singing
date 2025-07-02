/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Timmana: ["Timmana"],
      Inter: ["Inter"],
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      screens: {
        'msm': '320px',
        'mmd': '360px',
        'mlg': '400px',
        'mxl': '460px',
        'm2x': '520px'
      },
    },
  },
  plugins: [],
};
