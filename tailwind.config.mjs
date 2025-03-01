/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				HeyComic: ["'HeyComic'", "Onest Variable"], 
				SavoryCurry: ["'SavoryCurry'", "Onest Variable"],
			},
			colors: {
				lightYellow: '#FEFCE0',
				selectiveYellow: '#FFB82C',
				marianBlue: '#283A84',
				royalBlue: '#4565E6',
				blackBean: '#260702',
			},
		},
	},
	plugins: [],
}
