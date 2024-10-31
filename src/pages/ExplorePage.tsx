import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import ArtworksGrid from '../components/ArtworksGrid';
import { ArtworkWithoutEmbeddings } from '../types';

const ExplorePage = ({ artworks }: { artworks: ArtworkWithoutEmbeddings[] }) => {
	return (
		<Layout>
			<NavBar />
			<div id="container">
				<h1>Explore</h1>
				<p class="tagline">
					Discover connections between artworks from the Met Museum's collection by clicking <strong>"Find Similar"</strong> below each
					painting to reveal hidden relationships within the collection.
				</p>
				<ArtworksGrid artworks={artworks} pageNumber={1} />
			</div>
		</Layout>
	);
};

export default ExplorePage;
