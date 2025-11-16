/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1ff",
          100: "#b3d9ff",
          200: "#80c1ff",
          300: "#4da9ff",
          400: "#1a91ff",
          500: "#0079e6",
          600: "#0061b3",
          700: "#004980",
          800: "#00314d",
          900: "#00191a",
        },
      },
    },
  },
  plugins: [],
};
