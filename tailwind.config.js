/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#903AFF',
				primary_light: '#8f3aff29',
				secondary: '#FF26B9',
				bg: '#150E28',
				bg_dark: '#0f0a1d',
				purple: '#D434FE',
				purple_light: '#d634fe28',
			},
			backgroundImage: {
				hero_bg: "url('/src/assets/landing.png')",
				idea_bg: "url('/src/assets/idea-bg.png')",
				rules_bg: "url('/src/assets/rule-bg.png')",
				timeline_bg: "url('/src/assets/timeline-bg.png')",
				awards_bg: "url('/src/assets/awards-bg.png')",
				privacy_bg: "url('/src/assets/privacy-bg.png')",
				criteria_bg: "url('/src/assets/criteria-bg.png')",
			},
		},
	},
	plugins: [],
}
