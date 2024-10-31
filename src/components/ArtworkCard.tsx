import { ArtworkWithoutEmbeddings, VectorizeVectorMetadata } from '../types';

const ArtworkCard = ({
	primaryImageSmall,
	title,
	artistDisplayName,
	objectDate,
	objectID,
}: ArtworkWithoutEmbeddings | VectorizeVectorMetadata) => {
	return (
		<article>
			<img src={primaryImageSmall} />
			<p>
				<h5>{title}</h5>
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
	);
};

export default ArtworkCard;
