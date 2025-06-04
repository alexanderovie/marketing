module.exports = {
  content: [
    './src/app/marketing-agency/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  css: ['./public/css/style.css'], // Ajusta si tu CSS global está en otra ruta
  output: './public/css/cleaned.css', // Puedes sobrescribir el original si quieres
  safelist: [], // aquí puedes poner clases que NO quieres que se eliminen
};