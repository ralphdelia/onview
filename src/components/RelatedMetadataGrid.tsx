import { VectorizeMatch, VectorizeVectorMetadata } from '../types';
import ArtworkCard from './ArtworkCard';

const RelatedMetadataGrid = ({ relatedArtworks }: { relatedArtworks: VectorizeMatch }) => {
	const pairs = relatedArtworks.reduce((acc, obj) => {
		if (acc.length === 0 || acc[acc.length - 1].length === 3) {
			acc.push([obj.metadata]);
		} else {
			acc[acc.length - 1].push(obj.metadata);
		}
		return acc;
	}, [] as VectorizeVectorMetadata[][]);

	return (
		<>
			<h3>Related:</h3>
			{pairs.map((pair) => {
				return (
					<div className="grid">
						{pair.map((artwork) => (
							<ArtworkCard {...artwork} />
						))}
					</div>
				);
			})}
		</>
	);
};

export default RelatedMetadataGrid;
