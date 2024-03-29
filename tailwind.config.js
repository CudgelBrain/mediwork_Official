/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F99E00",
        blue: "#0D2137",
        red: "#5B2F2F",
        black: "#202020",
        grey: "#696969",
        l_grey: "#9497a1",
        l_black: "#34322E",
        vl_blue: "#01698F",
        vvl_blue: "#3DC0EB",
        l_blue: "#034D66",
        navy_blue: "#00254D",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
    require('taos/plugin')
  ],
};
