/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "accent-0": "var(--accent-0)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
        "accent-5": "var(--accent-5)",
        "accent-6": "var(--accent-6)",
        "accent-7": "var(--accent-7)",
        "accent-8": "var(--accent-8)",
        "accent-9": "var(--accent-9)"
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)"
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0.2 },
          "20%": { opacity: 0.7 }
        }
      },
      animation: {
        blink: "blink 1s linear infinite"
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => ({ "animation-delay": value })
        },
        {
          values: theme("transitionDelay")
        }
      )
    })
  ]
}
