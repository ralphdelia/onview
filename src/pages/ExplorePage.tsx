import { Layout } from '../components/Layout';
import { NavBar } from '../components/NavBar';
import { ArtworksGrid } from '../components/ArtworksGrid';
import { ArtworkWithoutEmbeddings } from '../types';

export const ExplorePage = ({ artworks }: { artworks: ArtworkWithoutEmbeddings[] }) => {
	return (
		<Layout>
			<NavBar />
			<h1>Explore</h1>
			<div id="container">
				<ArtworksGrid artworks={artworks} pageNumber={1} />
			</div>
		</Layout>
	);
};
