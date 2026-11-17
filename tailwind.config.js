/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      //La propiedad fontFamily acepta un objeto con diferentes fuentes
      // Cada fuente con el nombre de propiedad que deseamos que tenga en el proyecto
      // tiene una lista de 2 elementos: Fuente a poner y fuente en caso de fallo
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
