import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import MainArtworkCard from '../components/MainArtworkCard';
import RelatedMetadataGrid from '../components/RelatedMetadataGrid';
import { ArtworkRecord, VectorizeMatch } from '../types';

interface ArtworkPageParams {
	artworkInfo: ArtworkRecord;
	relatedArtworks: VectorizeMatch[];
}
const ArtworkPage = ({ artworkInfo, relatedArtworks }: ArtworkPageParams) => {
	return (
		<Layout>
			<NavBar />
			<MainArtworkCard artworkInfo={artworkInfo} />
			<RelatedMetadataGrid relatedArtworks={relatedArtworks} />
		</Layout>
	);
};

export default ArtworkPage;
