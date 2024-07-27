/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'custom-green': '#025959',
      'custom-beige':'#F2E0C9',
      'custom-leaf-green':'#A0A603',
      'custom-teal':'#04BFBF',

    },},
  },
  plugins: [],
}

