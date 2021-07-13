module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      recursive: ["Recursive", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00CFFC",
        secondary: "#180F01",
        light: "#ccf6ff",
        gradient: "#b8f2ff",
        darker: "#0081F1",
        dark: "#0D1117",
        body: "#FFFEF9",
        lighter: "#F0F6F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
