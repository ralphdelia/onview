import { SearchParams } from '../types';

const SearchRows = ({ results }: { results: SearchParams[] }) => {
	const MAX_LINE_LEN = 30;
	return (
		<>
			{results.map(({ objectID, title, artistDisplayName, isHighlight }) => (
				<tr>
					<td>
						<a href={`artwork/${objectID}`}>{title.length > 30 ? title.slice(0, 30) + '...' : title}</a>
					</td>
					<td>{artistDisplayName.length > MAX_LINE_LEN ? artistDisplayName.slice(0, MAX_LINE_LEN) + '...' : artistDisplayName}</td>
					<td>{isHighlight === 'TRUE' ? '⭐' : ' '}</td>
				</tr>
			))}
		</>
	);
};

export default SearchRows;
