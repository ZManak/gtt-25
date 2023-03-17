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
        green: '#30423C'
      },
      spacing: {
        "148": "37rem",
        "233": "58.375rem",
        "100": "25rem"
      },
      margin: {
        "934px": "934px",
        "631px": "631px",
        "348px": "348px",
        "450px": "450px",
        "475px": "475px"
      }
    },
  },
  plugins: [require('flowbite-react')],
  darkMode: 'class',
}