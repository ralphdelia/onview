import { VectorizeMatch, VectorizeVectorMetadata } from '../types';

const RelatedMetadataGrid = ({ relatedArtworks }: { relatedArtworks: VectorizeMatch[] }) => {
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
											<h4>{title}</h4>
											<div style="display: inline-block;">
												<i>{artistDisplayName}</i>
												<p> {objectDate}</p>
											</div>
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

export default RelatedMetadataGrid;
