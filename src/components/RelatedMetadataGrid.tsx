import { VectorizeMatch, VectorizeVectorMetadata } from '../types';

export const RelatedMetadataGrid = ({ relatedArtworks }: { relatedArtworks: VectorizeMatch[] }) => {
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
			{pairs.map((pair, idx) => {
				return (
					<div key={idx} className="grid">
						{pair.map(({ primaryImageSmall, title, artistDisplayName, objectDate, objectID }, i) => {
							return (
								<div key={i}>
									<article>
										<img src={primaryImageSmall} />
										<p>
											<br />
											<strong>Title:</strong> {title}
											<br />
											<strong>Artists:</strong> {artistDisplayName || 'Unknown Artist'}
											<br />
											<strong>Date:</strong> {objectDate || 'n/a'}
											<br />
										</p>

										<form action={`/artwork/${objectID}`} method="get">
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
		</>
	);
};
