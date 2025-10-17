import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import ArtworksGrid from '../components/ArtworksGrid';
import { ArtworksWithoutEmbeddings } from '../types';

const ExplorePage = ({ artworks }: { artworks: ArtworksWithoutEmbeddings }) => {
	return (
		<Layout
			title="Explore Art Collection - OnView"
			description="Browse and explore over 2000 paintings from the Metropolitan Museum of Art. Discover visually similar artworks using AI-powered visual search technology."
			url="https://onview.dev/explore"
			scripts={['/static/javascript/explore.js']}
		>
			<NavBar />
			<div id="container">
				<h1>Explore</h1>
				<p class="tagline">
					Discover connections between artworks from the Met Museum's collection
					by clicking <strong>"Find Similar"</strong> below each painting to
					reveal hidden relationships within the collection.
				</p>
				<ArtworksGrid artworks={artworks} pageNumber={1} />
			</div>
		</Layout>
	);
};

export default ExplorePage;
