const Search = () => {
	return (
		<>
			<h1>Search</h1>
			<p class="tagline">
				Find approximately 2000 paintings that are currently on display at the Metropolitan Museum of Art and are part of its{' '}
				<a href="https://www.metmuseum.org/about-the-met/policies-and-documents/open-access">Open Access Initiative</a>.
			</p>
			<input
				type="search"
				name="searchTerm"
				placeholder="Begin Typing Search To By Titles or Artists..."
				hx-post="/search"
				hx-trigger="input changed delay:500ms, search"
				hx-target="#search-results"
			/>

			<table>
				<thead>
					<tr>
						<th>Artwork Title</th>
						<th>Artist Name</th>
						<th> Collection Highlight</th>
					</tr>
				</thead>
				<tbody id="search-results"></tbody>
			</table>
		</>
	);
};

export default Search;
