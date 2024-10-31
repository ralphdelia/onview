import { html } from 'hono/html';

const SearchScript = () => {
	return html`<script>
		document.addEventListener('DOMContentLoaded', () => {
			const searchBox = document.querySelector('input[type=search]');
			let timeoutId;
			searchBox.addEventListener('input', (e) => {
				clearInterval(timeoutId);

				const searchTerm = e.target.value;
				timeoutId = setTimeout(async () => {
					const res = await fetch('/search', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ searchTerm }),
					});
					const tableRows = await res.text();
					document.getElementById('search-results').innerHTML = tableRows;
				}, 500);
			});
		});
	</script> `;
};

export default SearchScript;
/*

input value

delay (set timeout) => send request
delay => new input => cancel request
create a new request

clearTimeout - clears it



set time out fires

make a fetch request to the server with the search term
as a query string

replace the search results with the reponse
*/
