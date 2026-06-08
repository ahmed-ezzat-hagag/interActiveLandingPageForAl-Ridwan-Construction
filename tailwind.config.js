/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f9fa",
          100: "#f0f2f5",
          900: "#1a1f2e",
        },
        gold: {
          300: "#d4af37",
          400: "#c9a961",
          500: "#b8860b",
        },
        accent: "#f39c12",
      },
      backgroundColor: {
        "primary-900": "#1a1f2e",
      },
      textColor: {
        "primary-900": "#1a1f2e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
