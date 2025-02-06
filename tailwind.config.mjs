/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1782c5",   // Deep Purple 25215d
        secondary: "#25215d", // Vibrant Blue 1782c5
        third: "#edd899",     // Warm Beige edd899
      },
      fontFamily: {
        primary: ["montserrat", "sans-serif"], // Use Mont as primary font
      },
      fontWeight: {
        montLight: "300",
        montBold: "700",
        montRegular: "500",
      },
    },
  },
  plugins: [],
};
