module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'antique-brass': '#cb997e',
        'desert-sand': '#ddbea9',
        'champagne-pink': '#ffe8d6',
        'ash-gray': '#b7b7a4',
        'artichoke': '#a5a58d',
        'ebony': '#6b705c',
        'pale-silver': '#d6ccc2',
        'timberwolf': '#ded6ce',
        'wolf': '#e5ded8',
        'isabelline': '#eeeae6',
        'almond': '#e3d5ca',
        'linen': '#f5ebe0',
        'middle-grey': '#8f857b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
