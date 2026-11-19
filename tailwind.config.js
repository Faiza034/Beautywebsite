/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#111633",
        ink: "#666666",
        mist: "#efefef",
        gold: "#c6a15c",
        lav: { 400: "#a0adcd", 200: "#d5ddf0" },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        condensed: ['"Roboto Condensed"', "Roboto", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      // Fluid type: scales with the viewport but never past the 1440px design size.
      fontSize: {
        hero: ["clamp(2.6rem, 6.55vw, 5.9rem)", { lineHeight: "1.12" }],
        display: ["clamp(1.9rem, 3.6vw, 3.2rem)", { lineHeight: "1.15" }],
        "display-lg": ["clamp(2rem, 4.4vw, 3.95rem)", { lineHeight: "1.1" }],
        lead: ["clamp(1.05rem, 1.87vw, 1.7rem)", { lineHeight: "1.4" }],
        card: ["clamp(1.1rem, 1.92vw, 1.75rem)", { lineHeight: "1.3" }],
        body: ["clamp(0.95rem, 1.65vw, 1.5rem)", { lineHeight: "1.45" }],
        nav: ["clamp(0.95rem, 1.65vw, 1.5rem)", { lineHeight: "1.2" }],
      },
    },
  },
  plugins: [],
};
