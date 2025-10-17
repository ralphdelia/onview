const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
	const url = process.argv[2] || 'https://onview.dev';

	console.log(`Generating OG image from: ${url}`);

	let browser;
	try {
		browser = await puppeteer.launch({
			headless: true,
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
		});

		const page = await browser.newPage();

		await page.setViewport({
			width: 1200,
			height: 800,
			deviceScaleFactor: 1,
		});

		await page.goto(url, {
			waitUntil: 'networkidle0',
			timeout: 30000,
		});

		await page.waitForSelector('h1', { timeout: 10000 });
		await page.waitForSelector('.button-container', { timeout: 10000 });

		const outputPath = path.resolve(__dirname, '..', 'public', 'static', 'og-image.jpg');

		await page.screenshot({
			path: outputPath,
			type: 'jpeg',
			quality: 90,
			clip: {
				x: 0,
				y: 0,
				width: 1200,
				height: 630,
			},
		});

		console.log(`✓ OG image generated successfully at: ${outputPath}`);
	} catch (error) {
		console.error('Error generating OG image:', error);
		throw error;
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}

generateOGImage().catch((error) => {
	console.error('Failed to generate OG image:', error);
	process.exit(1);
});
