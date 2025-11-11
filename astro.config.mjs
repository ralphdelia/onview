import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://onview.dev',
	output: 'static',
	adapter: cloudflare({
		imageService: 'compile',
	}),
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
