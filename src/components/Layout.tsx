import { html } from 'hono/html';

export const Layout = (props: { children?: any }) => {
	return html`<!doctype html>
		<html lang="en" data-theme="light">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="ie=edge" />
				<title>OnView</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.orange.min.css" />
				<script src="https://unpkg.com/htmx.org@2.0.2/dist/htmx.js" integrity="sha384-yZq+5izaUBKcRgFbxgkRYwpHhHHCpp5nseXp0MEQ1A4MTWVMnqkmcuFez8x5qfxr" crossorigin="anonymous"></script>
				<style>
					img {
						width: 100%;
						height: auto;
					}

					@media (max-width: 1200px) {
						img {
							width: 80vw;
							height: auto;
						}
					}

					@media (max-width: 800px) {
						img {
							width: 60vw;
							height: auto;
						}
					}

					@media (max-width: 500px) {
						img {
							width: 40vw;
							height: auto;
						}
					}
					h1 {
						margin-top: 10px;
						margin-bottom: 30px;
						text-align: center;
					}
					nav {
  				  margin-bottom: 30px;
					}
					.load {
					display: block;
          margin: 20px auto 60px;
					}

					</style>
				<!-- <script src="index.js"></script> -->
			</head>
			<body class="container">
				${props.children}

				</div>
				<footer>
				<hr />
				</footer>
				</body>
		</html>`;
};
