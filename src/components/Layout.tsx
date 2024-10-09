import { html } from 'hono/html';

const Layout = (props: { children?: any }) => {
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
				:root {
            --pico-font-size: 95%;
          }

          img {
						width: 100%;
						height: auto;
          }

          @media (min-width: 1201px) {
            .display-img {
              width: 60vw;
            }
          }
					@media (max-width: 1200px) {
						img {
  						margin-left: auto;
              margin-right: auto;
              display: block;
							width: 70vw;
							height: auto;
						}
					}

					@media (max-width: 500px) {
						img {
  						margin-left: auto;
              margin-right: auto;
              display: block;
              width: 60vw;
							height: auto;
						}

						.display-img {
              width: 70vw;
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

					figure > * {
            display: flex;
            justify-content: center;
          }

          @media (min-width: 1280px) {
            .container {
              max-width: 950px;
            }
          }

          .load {
  					display: block;
            margin: 20px auto 60px;
					}

					.tagline {
  					width: 66%;
  				  margin: 0 auto 40px;
  					text-align: center
					}

          .button-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 60px;
          }
          </style>
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
export default Layout;
