import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import MainArtworkCard from '../components/MainArtworkCard';
import RelatedMetadataGrid from '../components/RelatedMetadataGrid';
import { ArtworkRecord, VectorizeMatch } from '../types';

interface ArtworkPageParams {
	artworkInfo: ArtworkRecord;
	relatedArtworks: VectorizeMatch;
}
const ArtworkPage = ({ artworkInfo, relatedArtworks }: ArtworkPageParams) => {
	const title = String(artworkInfo.title) + ' - OnView';
	const description =
		String(artworkInfo.title) +
		' by ' +
		String(artworkInfo.artistDisplayName) +
		'. ' +
		String(artworkInfo.objectDate) +
		'. ' +
		String(artworkInfo.medium) +
		'. Discover visually similar artworks from the Metropolitan Museum of Art.';
	const image = String(artworkInfo.primaryImageSmall);
	const url = 'https://onview.dev/artwork/' + String(artworkInfo.objectID);

	return (
		<Layout title={title} description={description} image={image} url={url}>
			<NavBar />
			<MainArtworkCard artworkInfo={artworkInfo} />
			<RelatedMetadataGrid relatedArtworks={relatedArtworks} />
		</Layout>
	);
};

export default ArtworkPage;
