/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: "1280px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        grayish: "#EFFAFA",
        light: "#EEF6F6",
        dark: "#7B8E8E",
        very: "#2C3A3A",
        desaturated: "#5BA4A4",
      },
      fontSize: {
        "heading-1": [
          "22px",
          {
            letterSpacing: "0.22px",
          },
        ],
        "heading-2": [
          "18px",
          {
            letterSpacing: "0.18px",
          },
        ],
        "heading-3": "15px",
        "paragraph-1": "18px",
        "paragraph-2": "16px",
        "paragraph-3": "14px",
      },
    },
  },
  plugins: [],
}

