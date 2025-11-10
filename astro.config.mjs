import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
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
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
