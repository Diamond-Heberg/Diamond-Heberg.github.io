/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "game/*.html", "game/*/*.html", "cloud/*.html", "cloud/*/*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          diamondblack: {
          
 "primary": "#93c5fd",
          
 "secondary": "#c084fc",
          
 "accent": "#60a5fa",
          
 "neutral": "#1f2937",
          
 "base-100": "#0c4a6e",
          
 "info": "#c4b5fd",
          
 "success": "#68fd97",
          
 "warning": "#ffa100",
          
 "error": "#ff7573",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

