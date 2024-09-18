/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily :{
        neucha : ["Neucha","cursive"],
      },
      colors : {
        bgBlue : "#2f74c0" ,
        hoverButtonColor : '#388ae2'
      },
      boxShadow :{
        shadow : '2px 4px #0EF6E7',
        outShadow : '0 0 10px 1000px rgba(0,0,0,0.5)',
        buttonBoxShadow : "0 0 10 black",
      },
      fontSize : {
        buttonText : '15px',
      }
    },
  },
  plugins: [],
}

