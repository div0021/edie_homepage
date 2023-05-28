/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily:{
      heebo:['Heebo', "sans-serif"
    ],
    poppins:['Poppins', 'sans-serif'],
    montserrat:['Montserrat', 'sans-serif']
    },
    screens: {
      'micro':'300px',
      'tiny':'389px',
      'mini':'400px',
      'minior':'520px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }
      'lmd':'900px',
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '1.5xl':'1400px',
      '2xl': '1529px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

    },
  },
  plugins: [],
}

