module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3748',
        secondary: '#718096',
        tertiary: '#A0AEC0',
        accent: '#E53E3E',
        success: '#38A169',
        warning: '#F6AD55',
        danger: '#DC2626',
        info: '#6B7280',
        yellow: '#F2A200'
      },
    },
  },
  plugins: [require('flowbite-react')],
  darkMode: 'class',
}