import { Layout } from '../components/Layout';
import { NavBar } from '../components/NavBar';
import { ArtworksGrid } from '../components/ArtworksGrid';
import { ArtworkWithoutEmbeddings } from '../types';

export const ExplorePage = ({ artworks }: { artworks: ArtworkWithoutEmbeddings[] }) => {
	return (
		<Layout>
			<NavBar />
			<div id="container">
				<h1>Explore</h1>
				<p class="tagline">
					Discover connections between artworks from the Met Museum's collection by clicking "Find Similar" below each painting to reveal
					hidden relationships within the collection.
				</p>
				<ArtworksGrid artworks={artworks} pageNumber={1} />
			</div>
		</Layout>
	);
};
