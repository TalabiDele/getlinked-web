/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#903AFF',
				secondary: '#FF26B9',
				bg: '#150E28',
				purple: '#D434FE',
			},
		},
	},
	plugins: [],
}
