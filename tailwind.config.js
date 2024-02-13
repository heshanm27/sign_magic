/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow':'#BAA333',
      },
      backgroundColor:{
        'custom-main': "#9297C8",
        'custom-language': "#F7CB9A",
        'custom-highLight':'#EE7036',
        'custom-soialedu':'#F6C1A7',
        'custom-env':'#B6C796',
        'custom-math':'#69DFE5',
        
      
      }
    },
  },
  plugins: [],
};
