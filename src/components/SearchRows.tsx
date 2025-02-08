import { ArtworkSearchResults } from '../types';

const SearchRows = ({ results }: { results: ArtworkSearchResults }) => {
	const MAX_LINE_LEN = 30;
	return (
		<>
			{results.length === 0 ? (
				<tr>
					<td>No Results</td>
					<td></td>
					<td></td>
				</tr>
			) : (
				results.map(({ objectID, title, artistDisplayName, isHighlight }) => (
					<tr key={objectID}>
						<td>
							<a href={`artwork/${objectID}`}>
								{title.length > MAX_LINE_LEN ? <span data-tooltip={title}>{title.slice(0, MAX_LINE_LEN) + '...'}</span> : title}
							</a>
						</td>
						<td>
							{artistDisplayName.length > MAX_LINE_LEN ? (
								<span data-tooltip={artistDisplayName}>{artistDisplayName.slice(0, MAX_LINE_LEN) + '...'}</span>
							) : (
								artistDisplayName
							)}
						</td>
						<td>{isHighlight === 'TRUE' ? '⭐' : ' '}</td>
					</tr>
				))
			)}
		</>
	);
};

export default SearchRows;
