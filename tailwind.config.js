const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [plugin],
  theme: {
    screens: {
      xs: { min: "480px" },
      ...defaultTheme.screens,
      desktopMid: { max: "1220px", min: "1024px" },
    },
    extend: {
      colors: {
        lightGrey: "#F5F5F5",
        lighterGrey: "#F6F6F6",
        textGreish: "#373737",
        darkBlue: "#2281FC",
        textDark: "#2C2A2A",
        textDarkBlue: "#2281FC",
        textDarkSmall: "#212020",
        linearGrad: "#0BA5FC",
        cardcolor: "#28203F",
        cardtextcolor: "#96929C",
        cardhovercolor: "#0BA5FC",
        Flandingtext: "#212020",
        Flandingtext1: "#0E2B47",
        testimoColor: "#119BFC",
        fillColor: "#9E9E9E",
        backFill: "#F5F5F5",
        PriceFillColor: "#BEBCBC",
        BackgroundAUcolor: "#2183FC",
      },
      fontFamily: {
        lato: "Lato",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
};
