/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fp: "Josefin Sans, sans-serif",
      },
      fontSize: {
        18: "18px",
      },
      colors: {
        BrightBlue: "hsl(220, 98%, 61%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        VeryDarkBlue: " hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        LightGrayishBlueHover: "hsl(236, 33%, 92%)",
        DarkGrayishBlue: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        VeryDarkGrayishBlue: "hsl(237, 14%, 26%)",
      },
      backgroundImage: {
        CheckBackground: "linear-gradient(90deg, #57ddff, #c058f3)",
      },
      padding: {
        0.65: "0.65rem",
      },
      maxWidth: {
        680: "680px",
      },
      letterSpacing: {
        0.3: "0.3em",
      },
    },
  },
  plugins: [],
};
