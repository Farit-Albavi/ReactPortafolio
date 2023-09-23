/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'

  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkTheme: '#181823',
        customGreen: '#10b981',
        // Agrega o modifica los colores personalizados según tus necesidades
      },
    },
    transitionProperty: {
      'height': 'height',
      'width': 'width',
      // Agrega otras propiedades de transición si las necesitas
      'all': 'all', // Agrega 'all' para habilitar transiciones en todas las propiedades
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({
      addVariant
    }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}