import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://onview.dev',
	output: 'static',
	integrations: [
		pagefind({
			indexing: {
				bundleDirectory: 'dist',
				indexImages: true,
			},
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
