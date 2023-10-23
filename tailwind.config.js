/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#EA3D3C",
				second: "#39364E",
				secondary: "#9CD1C1",
				tert: "#F5AD0D",
				quart: "#FB690C",
			},

			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				epilogue: ["Epilogue", "sans-serif"],
			},

			container: {
				padding: "1.2rem",
				center: true,
			},
		},
	},
	plugins: [],
};
