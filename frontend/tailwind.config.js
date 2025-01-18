/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f8f6fb",
        secondary: "#452372",
        secondaryOne: "#ffbcb1",
        tertiary: "#272626",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xxs: "320px",
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        scrollReverse: 'scrollReverse 40s linear infinite',
      },
    },
  },
  plugins: [],
}
