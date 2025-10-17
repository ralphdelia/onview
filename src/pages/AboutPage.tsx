import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

const AboutPage = () => {
	return (
		<Layout
			title="About OnView - AI-Powered Art Discovery"
			description="Learn how OnView uses OpenAI's CLIP model and Cloudflare's vector database to find visually similar artworks from the Metropolitan Museum of Art's collection."
			url="https://onview.dev/about"
		>
			<NavBar />
			<article>
				<h1>About</h1>
				<p class="tagline">OnView compares visual characteristics between artworks, revealing similarities across cultures and time.</p>
				<hr />
				<h3>How It Works</h3>
				<p>
					The OnView dataset contains over 2000 images of paintings from the Metropolitan Museum of Art, that are part of the museum's{' '}
					<a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access">Open Access Initiative</a>. Each image has
					been processed by <a href="https://openai.com/index/clip/">OpenAI's CLIP model</a> to generate embeddings, which are numerical
					representations of the images' features and patterns. These embeddings allow the images to be compared for visual similarity. When
					a user clicks the "Find Similar" button for a particular artwork, the embedding for that image is compared to the rest of the
					dataset to provide the most visually similar artworks in the search results.
				</p>
			</article>
			<br />
		</Layout>
	);
};

export default AboutPage;
