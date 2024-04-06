/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        JosefinSans: "'Josefin Sans', 'sans-serif'"
      },
      
      colors: {
        bgColor: "var(--bg-color)",
        mainColor: "var(--main-color)",
        liTextColor: "var(--li-text-color)",
        circleBorderColor: "var(--circle-border-color)",
        liBorderColor: "var(--li-border-color)",
        placeholderColor: "var(--placeholder-color)",
        inputColor: "var(--input-color)",
        filterHoverColor: "var(--filter-hover-color)",
        filterColor: "var(--filter-color)"
      }
    },
  },
  plugins: [],
}

