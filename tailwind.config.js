/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b700ff",

          "secondary": "#3f00ff",

          "accent": "#d25a00",

          "neutral": "#071f20",

          "base-100": "#f3f4f6",

          "info": "#81d6ff",

          "success": "#00d48a",

          "warning": "#a05f00",

          "error": "#df0037",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

