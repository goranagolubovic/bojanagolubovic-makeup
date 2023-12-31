/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./emails/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#ac97a5",
        white: "#ffffff",
        brown: "#AC9897",
        yellow: "#F6E5D8",
        beige: "#EDCFCD",
        gray: "#D9D9D9",
        pink: "#EDCFCD",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        qwigley: ["var(--font-qwigley)"],
        greatvibes: ["var(--font-greatvibes)"],
        pinyonscript: ["var(--font-pinyonscript)"],
      },
    },
  },
  plugins: [],
};
