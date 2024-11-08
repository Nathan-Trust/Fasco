/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        digital: ["Digital Numbers Regular", "sans-serif"], // You can give your font a name, e.g., 'MyFont'
      },
    },
  },
  plugins: [],
};
