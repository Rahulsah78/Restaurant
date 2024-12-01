/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
      },
      animation: {
        scroll: "scroll 10s linear infinite", // Increased scroll speed (10s instead of 20s)
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Scrolls half of the total width
        },
      },
    },
  },
  plugins: [],
};
