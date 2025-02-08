import { ArtworkWithoutEmbeddings, VectorizeVectorMetadata } from '../types';

const ArtworkCard = ({
	primaryImageSmall,
	title,
	artistDisplayName,
	objectDate,
	objectID,
}: ArtworkWithoutEmbeddings | VectorizeVectorMetadata) => {
	return (
		<article style={{ display: 'flex', flexDirection: 'column' }}>
			<img src={primaryImageSmall} alt={title} />
			<p>
				<h5>{title}</h5>
				<div>
					<i>{artistDisplayName}</i>
					<p>{objectDate}</p>
				</div>
			</p>
			<div style={{ marginTop: 'auto' }}>
				<form action={`/artwork/${objectID}`} method="get">
					<button className="outline" type="submit">
						Find Similar
					</button>
				</form>
			</div>
		</article>
	);
};

export default ArtworkCard;
