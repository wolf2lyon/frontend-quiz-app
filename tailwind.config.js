/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: {
          DEFAULT: "#3B4D66",
          dark: "#313E51",
          light: "#626C7F",
        },
        primary: "#A729F5",
        accent: "#EE5454",
        success: "#26D782",
        secondary: {
          DEFAULT: "#ABC1E1",
          light: "#F4F6FA",
        }
      }
    },
  },
  plugins: [],
}

