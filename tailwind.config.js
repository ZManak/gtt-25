module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F2A200',
        yellow2: '#FFDD99',
        yellow3: '#FFF3DC',
        green: '#30423C',
        orange: '#E6570B',
        orange2: '#FABE9E',
        orange3: '#FDE9DF'
      },
      spacing: {
        "148": "37rem",
        "233": "58.375rem",
        "100": "25rem"
      },
      margin: {
        "934": "934px",
        "631": "631px",
        "348": "348px",
        "450": "450px",
        "475": "475px",
        "1368": "1368px"
      }
    },
  },
  plugins: [require('flowbite-react')],
  darkMode: 'class',
}