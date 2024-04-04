/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-Image': "url('../pages/img1.jpg')"
      },
    },
  },
  plugins: [],
}

