/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
				primary: "#EA3D3C",
				second: "#39364E",
			},

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        
      },

			container: {
				padding: "1.2rem",
				center: true,
			},
      screens: {
        sm: "640px",
        md: "1060px",
        lg: "1200px",
       
      },
    },
  },
  plugins: [],
}

