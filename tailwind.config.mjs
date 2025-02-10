/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import tailwindScrollbar from 'tailwind-scrollbar';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: [
					'Inter Variable',
					'Inter',
					'system-ui',
					'Apple Color Emoji',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI Emoji',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Noto Color Emoji',
				],
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '1.5rem',
					lg: '3rem',
					xl: '4rem',
					'2xl': '5rem',
				},
			},
			colors: {
				darkslategray: 'var(--darkslategray)',
				sandybrown: 'var(--sandybrown)',
				slategray: 'var(--slategray)',
				darkblack: 'var(--darkblack)',
				dracula: 'var(--dracula)',
				cornflowerblue: 'var(--cornflowerblue)',
				hotpink: 'var(--hotpink)',
				lavenderblush: 'var(--lavenderblush)',
				silver: 'var(--silver)',
				steelblue: 'var(--steelblue)',
				lightgray: 'var(--lightgray)',
				lightslategray: 'var(--lightslategray)',
				accentLight: 'var(--accent-light)',
				accentDark: 'var(--accent-dark)',
			},
		},
	},
	plugins: [
		typography,
		tailwindScrollbar({
			preferredStrategy: 'pseudoelements',
		}),
		flowbitePlugin,
	],
	// The class is dynamically assigned to body element
	// by pagefind
	safelist: ['overflow-hidden'],
};
