/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CyanMain: "#50A6B2",
        PinkMain: "#F193A6",
        PurpleMain: "#907DA4",
        PinkLow: "#F7C1CF",
        BrownMain: "#CC907E",
      },
    },
  },
  plugins: [],
};
