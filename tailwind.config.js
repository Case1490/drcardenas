/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Pink: "#f6c1cf",
        Purple: "#907ca5",
        Cyan: "#4fa4b3",
        Beige: "#ca8f7c",
      },
    },
  },
  plugins: [],
};
