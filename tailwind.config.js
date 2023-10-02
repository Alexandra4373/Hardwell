/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
				primary: "#756BEE",
				second: "#39364E",
			},
			container: {
				padding: "2rem",
				center: true,
			},
    },
  },
  plugins: [],
}

