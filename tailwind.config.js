/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#673DE6",
        second_primary: "#2F1C6A",
        background: "#FFFFFF",
        second_background: "#F4F5FF",
        danger: "#FC5185",
        success: "#00B090",
      },
    },
  },
  plugins: [],
};
