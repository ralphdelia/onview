import { Child } from 'hono/jsx';

interface LayoutProps {
	children?: Child;
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	scripts?: string[];
}

const Layout = (props: LayoutProps) => {
	const title = props.title ?? 'OnView';
	const description =
		props.description ??
		"Discover visually similar paintings from the Metropolitan Museum of Art's collection";
	const image = props.image ?? 'https://onview.dev/static/og-image.jpg';
	const url = props.url ?? 'https://onview.dev';

	return (
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:url" content={url} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="OnView" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<link rel="canonical" href={url} />
				<meta name="theme-color" content="#ff7700" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖼️</text></svg>"
				/>
				<link rel="dns-prefetch" href="https://collectionapi.metmuseum.org" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.orange.min.css"
				/>
				<link
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
					rel="stylesheet"
				/>
				<script src="/static/javascript/theme.js"></script>
				{props.scripts?.map((script) => (
					<script src={script}></script>
				))}
				<link rel="stylesheet" href="/static/styles.css" />
			</head>
			<body class="container">
				{props.children}
				<footer>
					<hr />
				</footer>

				<script
					defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon='{"token": "e5f6e59d47a94bc39051eb450ed41f11"}'
				/>
			</body>
		</html>
	);
};

export default Layout;
