import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const AboutPage = () => {
	return (
		<Layout>
			<NavBar />
			<hgroup>
				<h2>
					<mark>About</mark>
				</h2>
			</hgroup>
			<article>
				<h1>How it works</h1>
				<p class="tagline">OnView compares visual characteristics between artworks, revealing similarities across cultures and time.</p>
				<hr />
				<br />
				<p>
					The OnView dataset contains over 2000 images of paintings from the Metropolitan Museum of Art, that are part of the museum's{' '}
					<a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access">Open Access Initiative</a>. Each image has
					been processed by <a href="https://openai.com/index/clip/">OpenAI's CLIP model</a> to generate embeddings, which are numerical
					representations of the images' features and patterns. These embeddings allow the images to be compared for visual similarity. When
					a user clicks the "Find Similar" button for a particular artwork, the embedding for that image is compared to the rest of the
					dataset to provide the most visually similar artworks in the search results.
				</p>
				<br />
			</article>
			<br />
		</Layout>
	);
};

export default AboutPage;
