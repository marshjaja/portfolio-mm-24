/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primaryBlue: "#1A2D46",
				primaryPink: "#E51E57",
				primaryTeal: "#00918F",
				darkBackground: "#121212",
				darkAccentBlue: "#1B3B5A",
				darkAccentPink: "#D91A4D",
				darkAccentTeal: "#007B7A",
				darkTextPrimary: "#EAEAEA",
				darkTextSecondary: "#B0B0B0",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				dmserif: ["DM Serif Display", "serif"],
				worksans: ["Work Sans", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				opensans: ["Open Sans", "sans-serif"],
				dmsans: ["DM Sans", "sans-serif"],
				redhat: ["Red Hat Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
