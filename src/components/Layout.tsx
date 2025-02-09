import { ReactNode } from 'hono/jsx';
import { FC } from 'hono/jsx';

const Layout: FC = (props) => {
	return (
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>OnView</title>
				<link rel="dns-prefetch" href="https://collectionapi.metmuseum.org" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.orange.min.css" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<script src="/static/main.js"></script>
				<link rel="stylesheet" href="/static/styles.css" />
			</head>
			<body class="container">
				{props.children}
				<footer>
					<hr />
				</footer>

				{/* Cloudflare Web Analytics (also a script) */}
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
