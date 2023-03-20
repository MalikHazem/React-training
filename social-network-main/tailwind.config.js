/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  darkMode: "class",
  theme: {
    screens: {
      xs1: "350px",
      xs2: "420px",
      xs: "500px",
      sm: "640px",
      md1: "700px",
      md2: "800px",
      md3: "900px",
      lg: "1224px",
      lg2: "1350px",
      xl: "1500px",
      xl2: "1660px",
    },
  },
  plugins: [],
};
