/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				LuckiestGuy: ["'LuckiestGuy'", "Onest Variable"], 
				ImFellFrench: ["'ImFellFrench'", "Onest Variable"],
				ExconVariable: ["'ExconVariable'", "Onest Variable"],
				ExconBold: ["'ExconBold'", "Onest Variable"],
			},
			colors: {
				WHITE: '#FEFEFE',
				NIGHT: '#0A0B08',
				EERIEBLACK: '#1D1F1A',
				SUNGLOW: '#FBCA41',
				DUN: '#D4C2B2',
				EMERALD :'#71C893',
				JASPER: '#C96147',
			},
		},
	},
	plugins: [],
}
