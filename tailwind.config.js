/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx,js,jsx}',
  './components/**/*.{ts,tsx,js,jsx}',
  './app/**/*.{ts,tsx,js,jsx}',
  './src/**/*.{ts,tsx,js,jsx}',
  "./node_modules/flowbite/**/*.js",
  "./node_modules/flowbite/**/*.jsx"
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    animation: {
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      backgroundPositionSpin: "background-position-spin 3000ms infinite alternate",

      meteor: "meteor 5s linear infinite",
    },
    keyframes: {
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
        "70%": { opacity: 1 },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: 0,
        },
      },
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate", "flowbite/plugin")];