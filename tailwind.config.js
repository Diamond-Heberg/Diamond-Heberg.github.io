/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html",
    "game/*.html",
    "game/*/*.html",
    "cloud/*.html",
    "cloud/*/*.html",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        diamondblack: {
          primary: "#93c5fd",
          secondary: "#c084fc",
          accent: "#60a5fa",
          neutral: "#1f2937",
          "base-100": "#0c4a6e",
          info: "#c4b5fd",
          success: "#68fd97",
          warning: "#ffa100",
          error: "#ff7573",
        },
        diamondwhite: {
          primary: "#93c5fd",
          secondary: "#c084fc",
          accent: "#60a5fa",
          neutral: "#4d77a3",
          "base-100": "#80a6ce",
          info: "#c4b5fd",
          success: "#68fd97",
          warning: "#ffa100",
          error: "#ff7573",
        },
      },
    ],
  },
  darkMode: ['class', '[data-theme="diamondblack"]'],
  plugins: [require("daisyui")],
};
