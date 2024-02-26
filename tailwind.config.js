/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "drop-once": "drop 1s ease 1",
        "spin-once": "spin 1s linear 1",
        "spin-once-fast": "spin 0.7s linear 1",
        "grow-once": "grow 1s ease 1",
      },
      keyframes: {
        "drop": {
          "0%": { transform: "translateY(-25%)", opacity: 0 },
          "100%": { transform: "translateY(0%)" },
        },
        "grow": {
          "0%": { transform: "scale(100%)" },
          "100%": { transform: "scale(300%)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
