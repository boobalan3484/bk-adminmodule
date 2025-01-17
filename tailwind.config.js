/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      backgroundImage: () => ({
        // 'hero-pattern': "url('./src/Assets/1.jpg')",
        // 'footer-texture': "url('./src/Assets/9.jpg')",
        // 'form-texture': "url('./src/Assets/3.jpg')",
        // 'form-pattern': "url('./src/Assets/8.jpg')",
        // 'png-pattern': "url('./src/Assets/png.png')",
        // 'pencil':"url('./src/Assets/pencil.png')"

      })
    },
  },
  plugins: [],

}