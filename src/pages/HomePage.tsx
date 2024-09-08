import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const HomePage = () => {
	return (
		<Layout>
			<NavBar />
			<h1>OnView</h1>
			<p class="tagline">
				A search engine for visually similar paintings that are part of the Metropolitan Museum of Art's Open Access Initiative. Find
				paintings you love and explore connections across the collection.
				<br />
			</p>
			<div class="button-container">
				<form action="/explore" method="get">
					<button>Explore</button>
				</form>
				<form action="/random" method="get">
					<button>I'm feeling lucky</button>
				</form>
			</div>
			<figure>
				<a href="/artwork/435882">
					<img
						class="display-img"
						src="https://images.metmuseum.org/CRDImages/ep/web-large/DT47.jpg"
						alt="Still Life with Apples and a Pot of Primroses"
					/>
				</a>
				<figcaption>
					<small>Still Life with Apples and a Pot of Primroses, Paul Cézanne</small>
				</figcaption>
			</figure>
		</Layout>
	);
};

export default HomePage;
