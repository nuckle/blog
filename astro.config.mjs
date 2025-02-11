// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

import pagefind from 'astro-pagefind';

import AstroPWA from '@vite-pwa/astro';
import { manifestObj } from './manifest';

// https://astro.build/config
export default defineConfig({
	site: 'https://itscat.org',
	integrations: [
		tailwind(),
		mdx({
			syntaxHighlight: false,
			rehypePlugins: [
				rehypeAccessibleEmojis,
				/**
				 * Adds ids to headings
				 */
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'prepend',
						content: {
							type: 'text',
							value: '#',
						},
						headingProperties: {
							className: ['anchor'],
						},
						properties: {
							className: ['anchor-link'],
						},
					},
				],
				[
					/**
					 * Enhances code blocks with syntax highlighting, line numbers,
					 * titles, and allows highlighting specific lines and words
					 */

					rehypePrettyCode,
					{
						theme: {
							dark: 'github-dark',
							light: 'github-light-default',
						},
					},
				],
			],
		}),
		icon(),
		sitemap(),
		pagefind(),
		AstroPWA({
			base: '/',
			scope: '/',
			includeAssets: ['favicon.png'],
			registerType: 'autoUpdate',
			manifest: manifestObj,
			workbox: {
				navigateFallback: '/404',
				globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,xml}'],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
			devOptions: {
				enabled: false,
			},
		}),
	],
});
