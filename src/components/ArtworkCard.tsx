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
			<div style={{ flexGrow: 1, marginTop: '15px' }}>
				<h5>{title}</h5>
				<i>{artistDisplayName}</i>
				<p>{objectDate}</p>
			</div>
			<form action={`/artwork/${objectID}`} method="get" style={{ marginBottom: '0px' }}>
				<button className="outline" type="submit">
					Find Similar
				</button>
			</form>
		</article>
	);
};

export default ArtworkCard;
