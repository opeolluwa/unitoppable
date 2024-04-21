
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors ={
  ...defaultColors
}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
      section: {
        margin: "100px 0",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
    extend: {
      colors: colors,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

