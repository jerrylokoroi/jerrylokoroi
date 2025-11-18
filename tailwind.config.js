/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#149ddd',
        'heading': '#050d18',
        'default': '#272829',
        'background': '#ffffff',
        'surface': '#ffffff',
        'contrast': '#ffffff',
        'nav': '#a8a9b4',
        'nav-hover': '#ffffff',
      },
      fontFamily: {
        'default': ['Roboto', 'system-ui', 'sans-serif'],
        'heading': ['Raleway', 'sans-serif'],
        'nav': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

