/** @type {import('tailwindcss').Config} */
module.exports = {
  // Se aplicará a todos los archivos .js y .jsx en los directorios que se encuentran en la propiedad content
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

