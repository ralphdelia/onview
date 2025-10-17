import { ArtworksWithoutEmbeddings } from '../types';
import ArtworkCard from './ArtworkCard';

const ArtworksGrid = ({
	artworks,
	pageNumber,
}: {
	artworks: ArtworksWithoutEmbeddings;
	pageNumber: number;
}) => {
	const sets = artworks.reduce((acc, obj) => {
		if (acc.length === 0 || acc[acc.length - 1].length === 3) {
			acc.push([obj]);
		} else {
			acc[acc.length - 1].push(obj);
		}
		return acc;
	}, [] as ArtworksWithoutEmbeddings[]);

	return (
		<>
			{sets.map((set) => {
				return (
					<div className="grid">
						{set.map((artwork) => (
							<ArtworkCard {...artwork} />
						))}
					</div>
				);
			})}
			<button
				id="load-more-btn"
				class="load"
				data-action={'api/explore?page=' + (pageNumber + 1)}
			>
				Load More
			</button>
		</>
	);
};

export default ArtworksGrid;
