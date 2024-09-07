import { ArtworkWithoutEmbeddings } from '../types';

export const ArtworksGrid = ({ artworks, pageNumber }: { artworks: ArtworkWithoutEmbeddings[]; pageNumber: number }) => {
	const sets = artworks.reduce((acc, obj) => {
		if (acc.length === 0 || acc[acc.length - 1].length === 3) {
			acc.push([obj]);
		} else {
			acc[acc.length - 1].push(obj);
		}
		return acc;
	}, [] as ArtworkWithoutEmbeddings[][]);

	return (
		<>
			{sets.map((set) => {
				return (
					<div className="grid">
						{set.map((artwork) => {
							return (
								<div>
									<article>
										<img src={artwork.primaryImageSmall} />
										<p>
											<br />
											<strong>Title:</strong> {artwork.title}
											<br />
											<strong>Artists:</strong> {artwork.artistDisplayName || 'Unknown Artist'}
											<br />
											<strong>Date:</strong> {artwork.objectDate || 'n/a'}
											<br />
										</p>

										<form action={`/artwork/${artwork.objectID}`} method="get">
											<button class="outline" type="submit">
												Find Similar
											</button>
										</form>
									</article>
								</div>
							);
						})}
					</div>
				);
			})}
			<button class="load" hx-get={'api/explore?page=' + (pageNumber + 1)} hx-target="this" hx-swap="outerHTML">
				Load More
			</button>
		</>
	);
};
