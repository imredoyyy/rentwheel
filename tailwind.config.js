/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      lgSm: "700px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        color: {
          50: "#007DFC",
          100: "#020617",
          200: "#202731",
          300: "#EFEAE5",
          400: "#e6f9ff",
          500: "#CCD7E6",
          600: "#99ccff",
        },
      },
      transitionDuration: {
        400: "400ms",
      },
      backgroundImage: {
        pagination: "url('./assets/pagination.png')",
      },
      boxShadow: {
        shadowDefault:
          "0 10px 15px rgba(0,125,252, 0.4), 0 6px 6px rgba(0,125,252, 0.22), 0 0 50px -15px rgb(0,125,252)",
        shadowHover:
          "0 14px 17px rgba(0,125,252, 0.25), 0 10px 10px rgba(0,125,252, 0.4), 0 0 90px -18px rgb(0,125,252)",
        modalShadow: "0 10px 20px 0 rgba(0,0,0,.1)",
        carouselShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
