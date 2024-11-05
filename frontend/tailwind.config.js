/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#7E60BF',
        dark:'#FFE1FF',
        punk:'#E4B1F0',
        title:'#E4B1F0'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
    
  },
  plugins: [],
}