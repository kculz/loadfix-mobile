/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,jsx,tsx,ts}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/(tabs)/index.tsx",
    "./app/index.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

