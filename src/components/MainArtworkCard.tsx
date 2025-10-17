import { ArtworkRecord } from '../types';

const MainArtworkCard = ({ artworkInfo }: { artworkInfo: ArtworkRecord }) => {
	const {
		objectID,
		isHighlight,
		primaryImageSmall,
		title,
		culture,
		artistDisplayName,
		artistDisplayBio,
		objectDate,
		medium,
		dimensions,
		galleryNumber,
	} = artworkInfo;

	return (
		<article>
			<h1>{title || 'Untitled'}</h1>
			<div className="grid">
				<img src={primaryImageSmall} alt={title} className="artwork-image" />
				<div className="artwork-details">
					<p>
						<strong>Artist:</strong> {artistDisplayName || 'Unknown Artist'}
					</p>
					{culture && (
						<p>
							<strong>Culture:</strong> {culture}
						</p>
					)}
					<p>
						<strong>Date:</strong> {objectDate ? objectDate : 'n/a'}
					</p>
					{medium && (
						<p>
							<strong>Medium:</strong> {medium}
						</p>
					)}
					{dimensions && (
						<p>
							<strong>Dimensions:</strong> {dimensions}
						</p>
					)}
					{galleryNumber && (
						<p>
							<strong>Gallery:</strong> {galleryNumber}
						</p>
					)}
					{isHighlight === 'TRUE' && (
						<p className="highlight">Highlighted Artwork</p>
					)}
					{artistDisplayBio && (
						<p>
							<em>{artistDisplayBio}</em>
						</p>
					)}
					<p>
						<a
							href={`https://www.metmuseum.org/art/collection/search/${objectID}`}
						>
							View on metmuseum.org &rarr;
						</a>
					</p>
				</div>
			</div>
		</article>
	);
};
export default MainArtworkCard;
